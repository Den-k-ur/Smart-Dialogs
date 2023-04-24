"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var body_parser_1 = require("body-parser");
var json_server_1 = require("json-server");
var jsonwebtoken_1 = require("jsonwebtoken");
var server = (0, json_server_1.create)();
var serverRouter = (0, json_server_1.router)('./db.json');
var userdb = JSON.parse((0, fs_1.readFileSync)('api/users.json', 'utf8'));
server.use((0, json_server_1.defaults)());
var SECRET_KEY = '123456789';
var expiresIn = '1h';
var expiresInRememberMe = '1y';
var jsonParser = (0, body_parser_1.json)();
function createToken(payload) {
    if (payload.rememberMe) {
        console.log('remember');
        return (0, jsonwebtoken_1.sign)(payload, SECRET_KEY, { expiresIn: expiresInRememberMe });
    }
    else {
        console.log(payload);
        return (0, jsonwebtoken_1.sign)(payload, SECRET_KEY, { expiresIn: expiresIn });
    }
}
function verifyToken(token) {
    return (0, jsonwebtoken_1.verify)(token, SECRET_KEY, function (err, decode) { return (decode !== undefined ? decode : err); });
}
function isAuthenticated(_a) {
    var email = _a.email, password = _a.password;
    return (userdb.users.findIndex(function (user) { return user.email === email && user.password === password; }) !== -1);
}
server.post('/auth/login', jsonParser, function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password, rememberMe = _a.rememberMe;
    var currentuser = userdb.users.find(function (user) { return user.email === email && user.password === password; });
    if (isAuthenticated({ email: email, password: password, rememberMe: rememberMe }) === false) {
        var status_1 = 401;
        var message = 'Incorrect email or password';
        res.status(status_1).json({ status: status_1, message: message });
        return;
    }
    var access_token = createToken({ email: email, password: password, rememberMe: rememberMe });
    var refresh_token = createToken({ email: email, password: password, rememberMe: rememberMe });
    res.status(200).json({
        access_token: access_token,
        refresh_token: refresh_token,
        firstName: currentuser.firstName,
        lastName: currentuser.lastName
    });
});
// Refresh token
server.post('/auth/refresh-token', function (req, res) {
    var refreshToken = req.body.refreshToken;
    if (refreshToken === undefined) {
        var status_2 = 401;
        var message = 'Refresh token is required';
        res.status(status_2).json({ status: status_2, message: message });
        return;
    }
    try {
        var decoded = (0, jsonwebtoken_1.verify)(refreshToken, SECRET_KEY);
        var access_token = createToken({ email: decoded.email, password: decoded.password });
        res.status(200).json({ access_token: access_token });
    }
    catch (err) {
        var status_3 = 401;
        var message = 'Error: refresh_token is not valid';
        res.status(status_3).json({ status: status_3, message: message });
    }
});
server.use(/^(?!\/auth).*$/, function (req, res, next) {
    if (req.headers.authorization === undefined ||
        req.headers.authorization.split(' ')[0] !== 'Bearer') {
        var status_4 = 401;
        var message = 'Bad authorization header';
        res.status(status_4).json({ status: status_4, message: message });
        return;
    }
    try {
        verifyToken(req.headers.authorization.split(' ')[1]);
        next();
    }
    catch (err) {
        var status_5 = 401;
        var message = 'Error: access_token is not valid';
        res.status(status_5).json({ status: status_5, message: message });
    }
});
server.use(serverRouter);
server.listen(3002, function () {
    console.log('Run Auth API Server');
});
server.use('/api', serverRouter);
