import { Container, Grid, styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTheme as useThemeNT } from 'next-themes';
// import { parseCookies } from 'nookies';
import { ReactNode, useEffect, useState } from 'react';

import { ThemeProps } from '../../../theme/themeLight';
import AxAppBar from '../../foundation/AxAppBar/AxAppBar';
import AxDrawer from '../../foundation/AxDrawer/AxDrawer';
import AxFooter from '../../foundation/AxFooter/AxFooter';
import SEO from '../../foundation/SEO';

interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
  };
  seoProps?: { headTitle: string };
  menuProps?: {
    display: boolean;
  };
  footerProps?: {
    content?: ReactNode;
  };
  children: ReactNode;
  themeMode?: string;
}

// const { drawerWidth } = globalDefinitions;

const DrawerAnchor = styled('div')({
  display: 'flex',
});

const AxMain = styled('main')({
  flexGrow: 1,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const AppBarSpacer = styled('div')(({ theme }: any) => theme.mixins.toolbar);

const WebsitePageWrapper = ({
  children,
  seoProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerProps,
}: WebsitePageWrapperProps): JSX.Element => {
  const theme = useTheme<ThemeProps>(); // useTheme from MUI
  const { theme: dataTheme, setTheme } = useThemeNT(); // useTheme from next-themes

  const isDrawerCloseble = !useMediaQuery(theme.breakpoints.up('md'));
  // eslint-disable-next-line prettier/prettier

  const [openDrawer, setOpenDrawer] = useState<boolean>(!isDrawerCloseble);
  const [mounted, setMounted] = useState(false);

  function toggleOpenDrawer() {
    setOpenDrawer(isDrawerCloseble ? !openDrawer : true);
  }

  // eslint-disable-next-line operator-linebreak
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        // eslint-disable-next-line prettier/prettier
        event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenDrawer(isDrawerCloseble ? open : true);
    };

  const toggleTheme = () => {
    setTheme(dataTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpenDrawer(!isDrawerCloseble);
  }, [isDrawerCloseble]);

  if (!mounted) return <SEO {...seoProps} />;

  return (
    <>
      <SEO {...seoProps} />

      {seoProps?.headTitle !== 'Login' ? (
        <DrawerAnchor key="drawerAnchor">
          <div>
            <AxAppBar
              open={openDrawer}
              // eslint-disable-next-line react/jsx-no-bind
              toggleOpenDrawer={toggleOpenDrawer}
              // eslint-disable-next-line react/jsx-no-bind
              toggleTheme={toggleTheme}
            />
          </div>
          <AxDrawer
            open={openDrawer}
            toggleOpenDrawer={toggleOpenDrawer}
            onClose={toggleDrawer(false)}
            variant={isDrawerCloseble ? 'temporary' : 'permanent'}
          />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <AxMain onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <AppBarSpacer />
            <Container maxWidth="lg">
              <Grid>
                {/* Page content */}
                {children}
              </Grid>
            </Container>
            {footerProps ? (
              <Container style={{ marginTop: 'auto' }}>
                <AxFooter content={footerProps.content} />
              </Container>
            ) : null}
          </AxMain>
        </DrawerAnchor>
      ) : (
        { children }
      )}
    </>
  );
};

export default WebsitePageWrapper;
