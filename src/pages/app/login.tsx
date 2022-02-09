/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
// import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import clsx from 'clsx';
import { useState } from 'react';

import { ToggleSinginButton } from '../../components/commons/LoginButton/LoginButton';
import FormSignIn from '../../components/patterns/FormSignIn/FormSignIn';
import FormSignUp from '../../components/patterns/FormSignUp/FormSignUp';
// import FormSignIn from '../../components/patterns/FormLogin/index';
// import { AuthContext } from '../../components/wrappers/WebsitePage/context/AuthContext';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

const PageLogin = (): JSX.Element => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);

  const toggleSignMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <Box className={clsx('container', isSignUpMode && 'sign-up-mode')}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          // backgroundColor: 'red',
        }}
        // className="forms-container"
      >
        <div className="signin-signup">
          <FormSignIn />
          {/* <p>SignIn</p> */}

          {/* <p>SignUp</p> */}
          <FormSignUp setIsSignUpMode={setIsSignUpMode} />
        </div>
      </Box>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <Typography variant="h3">Novo aqui?</Typography>
            <Typography variant="body1">Faça seu cadastro</Typography>
            <ToggleSinginButton onClick={toggleSignMode}>
              Sign up
            </ToggleSinginButton>
          </div>
          <img src="/images/signup.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <Typography variant="h3">Já é um de nós?</Typography>
            <Typography variant="body1">Faça o login</Typography>
            <ToggleSinginButton onClick={toggleSignMode}>
              Sign in
            </ToggleSinginButton>
          </div>
          <img src="/images/login.svg" className="image" alt="" />
        </div>
      </div>
    </Box>
  );
};

// export default PageLogin;

export default websitePageHOC(PageLogin, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    hasDrawer: false,
    hasAppBar: false,
  },
});

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   // const apiClient = getAPIClient(ctx);
//   const { 'nextauth.token': token } = parseCookies(ctx);

//   if (token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // await apiClient.get('/users');

//   return {
//     props: {},
//   };
// };
