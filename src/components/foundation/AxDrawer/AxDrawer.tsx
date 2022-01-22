import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { Theme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { experimental_sx as sx, styled } from '@mui/material/styles';

import globalDefinitions from '../../../config/globalDefinitions';
import AppMenu from './AppMenu';

const { drawerWidth } = globalDefinitions;

const DrawerWrapper = styled(Drawer)(
  sx({
    paper: {
      width: `${drawerWidth}px`,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: `${drawerWidth}px`,
        boxSizing: 'border-box',
      },
    },
  }),
);

const ToolbarIconWrapper = styled('div')(
  ({ theme }: any) => theme.mixins.toolbar,
  sx({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
  }),
);

interface AxDrawerProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  onClose: any;
  variant: DrawerProps['variant'];
}

const AxDrawer = ({
  open,
  toggleOpenDrawer,
  ...props
}: AxDrawerProps): JSX.Element => (
  <DrawerWrapper
    // variant="permanent"
    elevation={6}
    open={open}
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    anchor="left"
    {...props}
  >
    <ToolbarIconWrapper>
      <IconButton onClick={toggleOpenDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </ToolbarIconWrapper>
    <Divider />
    <AppMenu />
  </DrawerWrapper>
);
export default AxDrawer;
