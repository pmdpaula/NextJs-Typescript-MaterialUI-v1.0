/* eslint-disable @typescript-eslint/no-unused-vars */
// import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';

// import { HttpClient } from '../../../../infra/http/HttpClient';
// import { api } from '../../../../services.RS/api';
// import {
//   recoverUserInformation,
//   signInRequest,
// } from '../../../../services.RS/auth';

type userRole = {
  role: {
    name: string;
    level: number;
  };
};

export type UserProps = {
  email: string;
  // avatarUrl: string;
  firstName: string;
  surname: string;
  // password: string;
  // passwordConfirmation: string;
  // token: string;
  // roles: [userRole];
};

export type SignInDataProps = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  userData: UserProps | null;
  userRoles: [userRole] | null;
  // eslint-disable-next-line no-unused-vars
  // signIn: (data: SignInDataProps) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';
export const LOGIN_COOKIE_USER_DATA = 'LOGIN_COOKIE_USER_DATA';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AuthProvider = ({ children }: any): JSX.Element => {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [userRoles, setUserRoles] = useState<[userRole] | null>(null);

  const isAuthenticated = !!userData;

  useEffect(() => {
    // const cookies = parseCookies()
    // const token = cookies[LOGIN_COOKIE_APP_TOKEN]
    // as linhas acima resolvem o mesmo que a abaixo.
    const { LOGIN_COOKIE_APP_TOKEN: token } = parseCookies();

    // TODO continuar com recuperação de dados de usuários já com token existente
    // if (token) {
    //   recoverUserInformation().then((response) => {
    //     setUser(response.user);
    //   });
    // }
  }, []);

  // async function signIn({ email, password }: SignInDataProps) {
  //   await HttpClient(`${process.env.NEXT_PUBLIC_JWT_SERVER}/login`, {
  //     method: 'POST',
  //     body: {
  //       email,
  //       password,
  //     },
  //   }).then((responseConverted) => {
  //     const { user, token } = responseConverted;
  //     const hasToken = token;

  //     if (!hasToken) {
  //       // throw new Error('Failed to login');
  //       throw new Error(responseConverted);
  //     }

  //     // remove _roles, password, __v
  //     const userBasicData: UserProps = (({ roles, ...others }) => others)(user);

  //     const roles: any = [];

  //     user.roles.forEach((item: { role: userRole }) => {
  //       roles.push(item.role);
  //     });

  //     const DAY_IN_SECONDS = 86400;
  //     // Salvar o Token
  //     setCookie(null, LOGIN_COOKIE_APP_TOKEN, token, {
  //       path: '/',
  //       maxAge: DAY_IN_SECONDS * 7,
  //     });

  //     console.table(userBasicData);
  //     console.table(roles);
  //     setUserData(userBasicData);
  //     setUserRoles(roles);
  //     console.table(userData);
  //     console.table(userRoles);

  //     return {
  //       token,
  //     };
  //   });

  //   // setCookie(undefined, 'nextauth.token', token, {
  //   //   maxAge: 60 * 60 * 1, // 1 hour
  //   // });

  //   // api.defaults.headers.Authorization = `Bearer ${token}`;

  //   Router.push('/app/profile');
  // }

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ userData, userRoles, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
