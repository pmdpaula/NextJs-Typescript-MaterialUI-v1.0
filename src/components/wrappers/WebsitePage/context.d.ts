/* eslint-disable no-unused-vars */
import { Theme } from '@mui/system';

export interface websitePageContextProps {
  // isDark: boolean;
  // setIsDark: (isDark) => void;
  resolvedTheme: Theme;
  currentTheme: Theme;
  setCurrentTheme: () => void;
}
