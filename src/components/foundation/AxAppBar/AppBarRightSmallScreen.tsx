import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import { useContext, useState } from 'react';

// import { AuthContext } from '../../wrappers/WebsitePage/context/AuthContext';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context/index';
import Link from '../Link/index';

interface AppBarRightSmallScreenProps {
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (event: any) => void;
}

const AppBarRightSmallScreen = ({
  toggleTheme,
}: AppBarRightSmallScreenProps): JSX.Element => {
  const websitePageContext = useContext(WebsitePageContext);
  // const { signOut } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuProfile = Boolean(anchorEl);

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openMenuProfile}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {' '}
          <Link href="/profile">
            <IconButton color="inherit">
              <AssignmentIndIcon />
            </IconButton>
            Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Tooltip
            title={
              websitePageContext.isDark
                ? 'Mudar para tema claro'
                : 'Mudar para tema escuro'
            }
            arrow
            placement="bottom"
          >
            <Switch
              checked={websitePageContext.isDark}
              onChange={toggleTheme}
            />
          </Tooltip>
          Tema
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <ExitToAppOutlinedIcon />
          </IconButton>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppBarRightSmallScreen;
