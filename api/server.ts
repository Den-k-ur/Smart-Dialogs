import { readFileSync } from 'fs';

import { json } from 'body-parser';
import { Request, Response } from 'express';
import { create, defaults, router } from 'json-server';
import { JsonWebTokenError, JwtPayload, sign, verify } from 'jsonwebtoken';

const server = create();

const serverRouter = router('./db.json');

const userdb = JSON.parse(readFileSync('api/users.json', 'utf8'));

server.use(defaults());

const SECRET_KEY = '123456789';
const expiresIn = '1h';
const expiresInRememberMe = '1y';

type AuthUserTypes = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  rememberMe: boolean;
};

const jsonParser = json();

function createToken(payload: Record<string, string | boolean>) {
  if (payload.rememberMe) {
    console.log('remember');

    return sign(payload, SECRET_KEY, { expiresIn: expiresInRememberMe });
  } else {
    console.log(payload);

    return sign(payload, SECRET_KEY, { expiresIn });
  }
}

function verifyToken(token: string): JwtPayload {
  try {
    const decoded = verify(token, SECRET_KEY) as JwtPayload;

    return decoded;
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      throw new Error('Invalid token');
    }

    throw err;
  }
}

function isAuthenticated({ email, password }: AuthUserTypes) {
  return (
    userdb.users.findIndex(
      (user: Record<string, string>) => user.email === email && user.password === password,
    ) !== -1
  );
}

server.post('/auth/login', jsonParser, (req: Request, res: Response) => {
  const { email, password, rememberMe }: AuthUserTypes = req.body;
  const currentuser = userdb.users.find(
    (user: Record<string, string>) => user.email === email && user.password === password,
  );
  if (isAuthenticated({ email, password, rememberMe }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });

    return;
  }

  const access_token = createToken({ email, password, rememberMe });
  const refresh_token = createToken({ email, password, rememberMe });
  res.status(200).json({
    access_token,
    refresh_token,
    firstName: currentuser.firstName,
    lastName: currentuser.lastName,
  });
});

// Refresh token
server.post('/auth/refresh-token', (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken === undefined) {
    const status = 401;
    const message = 'Refresh token is required';
    res.status(status).json({ status, message });

    return;
  }

  try {
    const decoded = verify(refreshToken, SECRET_KEY) as JwtPayload;
    const access_token = createToken({ email: decoded.email, password: decoded.password });
    res.status(200).json({ access_token });
  } catch (err) {
    const status = 401;
    const message = 'Error: refresh_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.get('/user', (req, res) => {
  const token = req?.headers?.authorization?.split(' ')[1];
  if (token) {
    const decoded = verifyToken(token) as JwtPayload;
    const findUser = userdb.users.find(
      (findUsers: Record<string, string>) => findUsers.email === decoded.email,
    );
    const { firstName, lastName } = findUser;
    res.status(200).json({ firstName, lastName });
  }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });

    return;
  }

  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.use(serverRouter);

server.listen(3002, () => {
  console.log('Run Auth API Server');
});

server.use('/api', serverRouter);
