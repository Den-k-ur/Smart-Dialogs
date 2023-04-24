import { useCallback } from 'react';

import { useRouter } from 'next/router';

export const useHeadersRedirect = () => {
  const router = useRouter();

  const handleLogin = useCallback(() => {
    router.push('/authorization');
  }, []);

  return { handleLogin };
};
