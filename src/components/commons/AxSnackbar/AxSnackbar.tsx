import { Alert, AlertTitle, Color } from '@material-ui/lab';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface AxSnackbarProps {
  id: string;
  // open: boolean;
  // isLoginError: boolean;
  // setIsLoginError: any;
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  severity: Color;
  title: string;
  text?: string;
  setOpenAlert?: any;
  openAlert?: boolean;
}

const AxSnackbar = ({
  id,
  severity,
  title,
  text,
  setOpenAlert,
  openAlert,
  ...props
}: AxSnackbarProps): JSX.Element => {
  const handleCloseAlert = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const SnackChild = (): JSX.Element => (
    <Alert severity={severity} onClose={handleCloseAlert}>
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );

  return (
    <Snackbar
      id={id}
      open={openAlert}
      autoHideDuration={props.autoHideDuration}
      // anchorOrigin={props.anchorOrigin}
      onClose={handleCloseAlert}
      {...props}
    >
      <SnackChild />
    </Snackbar>
  );
};

export default AxSnackbar;
