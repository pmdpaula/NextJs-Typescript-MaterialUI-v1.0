// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useTheme } from 'next-themes';
import { createContext, useMemo, useState } from 'react';

import themeDark from '../../../../theme/themeDark';
// import { AuthProvider } from './AuthContext';
import { websitePageContextProps } from '../context.d';

export const WebsitePageContext = createContext<websitePageContextProps | null>(
  null,
);

export const WrapperProvider = ({ children }: any) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);
  // eslint-disable-next-line space-infix-ops, prettier/prettier, no-undef
  const [headTitle, setHeadTitle] = useState<string>('');
  // const [signIn, setSignIn] = useState(false);

  const providerValue = useMemo(
    () => ({
      resolvedTheme,
      currentTheme,
      setCurrentTheme,
      headTitle,
      setHeadTitle,
    }),
    [currentTheme, headTitle, resolvedTheme, setHeadTitle],
  );

  return (
    // <AuthProvider>
    <WebsitePageContext.Provider value={providerValue}>
      {children}
    </WebsitePageContext.Provider>
    // </AuthProvider>
  );
};
