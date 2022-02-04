/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@mui/material';
import { styled } from '@mui/material';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import clsx from 'clsx';
import { useState } from 'react';

// import FormSignIn from '../../components/patterns/FormSignIn/FormSignIn';
// import FormSignUp from '../../components/patterns/FormSignUp/FormSignUp';
// import { AuthContext } from '../../components/wrappers/WebsitePage/context/AuthContext';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';

interface AxPageLoginWrapperProps {
  theme: Theme;
}

const AxPageLoginWrapper = styled(Container)(
  ({ theme }: AxPageLoginWrapperProps) => ({
    // flexShrink: 0,
  }),
);

const FormsContainer = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
});

const SigninSignup = styled('div')({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  left: '75%',
  width: '50%',
  transition: '1s 0.7s ease-in-out',
  display: 'grid',
  gridTemplateColumns: '1fr',
  zIndex: 5,
});

const AxPageLogin = (): JSX.Element => {
  const [isSignUpMode, setIsSignUpMode] = useState<boolean>(false);

  function toggleSignMode(): void {
    setIsSignUpMode(!isSignUpMode);
  }

  return (
    <>
      {/* <AxPageLoginWrapper disableGutters> */}
      {/* <div className={clsx('container', isSignUpMode && 'sign-up-mode')}> */}
      {/* <div className="forms-container"> */}
      {/* <FormsContainer>
        <SigninSignup> */}
      <p>Form</p>
      {/* <FormSignIn /> */}

      {/* <FormSignUp setIsSignUpMode={setIsSignUpMode} /> */}
      {/* </SigninSignup>
      </FormsContainer> */}
      {/* </div> */}

      {/* <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <Typography variant="h3">Novo aqui?</Typography>
            <Typography variant="body1">Faça seu cadastro</Typography>
            <Button
              id="singUpButton"
              variant="outlined"
              style={{
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              onClick={toggleSignMode}
            >
              Sign up
            </Button>
          </div>
          <img src="/images/signup.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <Typography variant="h3">Já é um de nós?</Typography>
            <Typography variant="body1">Faça o login</Typography>
            <Button
              id="singInButton"
              variant="outlined"
              style={{
                border: 'solid 3px white',
                color: 'white',
                borderRadius: 20,
                padding: '6px 30px',
              }}
              onClick={toggleSignMode}
            >
              Sign in
            </Button>
          </div>
          <img src="/images/login.svg" className="image" alt="" />
        </div>
      </div> */}
      {/* </AxPageLoginWrapper> */}
    </>
  );
};

// export default PageLogin;

export default websitePageHOC(AxPageLogin, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
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
