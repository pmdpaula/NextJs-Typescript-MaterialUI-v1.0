/* eslint-disable @typescript-eslint/no-unused-vars */
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useTheme as useThemeNT } from 'next-themes';

import globalDefinitions from '../../../config/globalDefinitions';
import ThemeSwitch from '../../commons/ThemeSwitch/ThemeSwitch';
import Link from '../Link';
import AppBarRightSmallScreen from './AppBarRightSmallScreen';

const { drawerWidth } = globalDefinitions;

interface AxAppBarProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  hasDrawer?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isDrawerCloseble?: boolean;
}

const AppBarWrapper = styled(AppBar, {
  shouldForwardProp: (prop: any) => prop !== 'open',
})<AppBarProps>(({ theme, open, isDrawerCloseble }) => ({
  zIndex: theme.zIndex.drawer + 1,
  // eslint-disable-next-line prettier/prettier
  ...(open && isDrawerCloseble && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const AxAppBar = ({
  open,
  toggleOpenDrawer,
  hasDrawer,
}: AxAppBarProps): JSX.Element => {
  const { theme: dataTheme, setTheme, resolvedTheme } = useThemeNT(); // useTheme from next-themes

  function toggleTheme(): void {
    setTheme(dataTheme === 'light' ? 'dark' : 'light');
  }

  // eslint-disable-next-line prettier/prettier
  const logo = resolvedTheme === 'dark'
      ? '/AxBladeSoftware_logo_nome_light.svg'
      : '/AxBladeSoftware_logo_nome_dark.svg';

  return (
    <AppBarWrapper
      position="absolute"
      open={open}
      color="primary"
      enableColorOnDark
    >
      <Toolbar>
        <Stack
          sx={{ flexGrow: 1 }}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {hasDrawer && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label={open ? 'close drawer' : 'open drawer'}
              onClick={toggleOpenDrawer}
              sx={{ marginRight: '1rem', display: { xs: 'block', md: 'none' } }}
            >
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          )}

          <Stack
            sx={{ flexGrow: 1 }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Image src={logo} width={120} height={40} />
            <Typography
              component="h2"
              noWrap
              style={{ marginLeft: '1.5rem', fontWeight: 600 }}
            >
              DashBoard Admin
            </Typography>
          </Stack>

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              pointerEvents: { xs: 'none', md: 'auto' },
            }}
          >
            <Link href="/app/profile">
              <Tooltip title="Perfil" arrow placement="bottom">
                <IconButton color="inherit">
                  <AssignmentIndIcon />
                </IconButton>
              </Tooltip>
            </Link>
            <ThemeSwitch toggleTheme={toggleTheme} />
            <Tooltip title="Sair" arrow placement="bottom">
              <IconButton color="inherit">
                <ExitToAppOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <AppBarRightSmallScreen toggleTheme={toggleTheme} />
        </Stack>
      </Toolbar>
    </AppBarWrapper>
  );
};

export default AxAppBar;
