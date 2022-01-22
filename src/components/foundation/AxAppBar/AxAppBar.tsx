/* eslint-disable @typescript-eslint/no-unused-vars */
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
// import { makeStyles, Theme } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
// import { makeStyles } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import clsx from 'clsx';
import Image from 'next/image';
import { useTheme as useThemeNT } from 'next-themes';

import globalDefinitions from '../../../config/globalDefinitions';
import Link from '../Link';
import AppBarRightSmallScreen from './AppBarRightSmallScreen';

const { drawerWidth } = globalDefinitions;

interface AxAppBarProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  // handleDrawerClose: () => void;
  // isDrawerCloseble: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (event: any) => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  isDrawerCloseble?: boolean;
}

const AppBarWrapper = styled(MuiAppBar, {
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
  toggleTheme,
}: AxAppBarProps): JSX.Element => {
  const { resolvedTheme } = useThemeNT(); // useTheme from next-themes

  // const { signOut } = useContext(AuthContext);

  // eslint-disable-next-line prettier/prettier
  const logo = resolvedTheme === 'dark'
      ? '/AxBladeSoftware_logo_nome_light.svg'
      : '/AxBladeSoftware_logo_nome_dark.svg';

  return (
    <AppBarWrapper position="absolute" open={open}>
      <Toolbar sx={{ paddingRight: 2 }}>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label={open ? 'close drawer' : 'open drawer'}
            onClick={toggleOpenDrawer}
            sx={{ marginRight: '1rem' }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Hidden>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          justifyContent="start"
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
        </Box>
        <Hidden mdUp>
          <AppBarRightSmallScreen toggleTheme={toggleTheme} />
        </Hidden>
        <Hidden smDown>
          <Box>
            <Link href="/profile">
              <Tooltip title="Perfil" arrow placement="bottom">
                <IconButton color="inherit">
                  <AssignmentIndIcon />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip
              title={
                resolvedTheme === 'dark'
                  ? 'Mudar para tema claro'
                  : 'Mudar para tema escuro'
              }
              arrow
              placement="bottom"
            >
              <Switch
                checked={resolvedTheme === 'dark'}
                onChange={toggleTheme}
              />
            </Tooltip>
            <Tooltip title="Sair" arrow placement="bottom">
              <IconButton color="inherit">
                <ExitToAppOutlinedIcon />
              </IconButton>
            </Tooltip>
            {/* <Typography>sair</Typography> */}
          </Box>
        </Hidden>
      </Toolbar>
    </AppBarWrapper>
  );
};

export default AxAppBar;
