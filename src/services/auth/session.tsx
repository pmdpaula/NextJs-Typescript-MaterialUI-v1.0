import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { authService } from './authService';

export function withSession(func: any) {
  return async (ctx: any) => {
    try {
      const session = await authService.getSession(ctx);
      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session,
        },
      };

      return func(modifiedCtx);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: '/?error=401',
        },
      };
    }
  };
}

export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getSession()
      .then((userSession) => {
        console.log(userSession);
        setSession(userSession);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: {
      session,
    },
    error,
    loading,
  };
}

export const withSessionHOC = (Component: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) {
      console.log('redireciona o usuário para a home');
      router.push('/?error=401');
    }

    const modifiedProps = {
      ...props,
      session: session.data.session,
    };
    return <Component {...modifiedProps} />;
  };

  return Wrapper;
};
