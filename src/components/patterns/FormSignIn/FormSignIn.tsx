import { yupResolver } from '@hookform/resolvers/yup';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Slide, { SlideProps } from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

// import styled from 'styled-components';
import globalDefinitions from '../../../config/globalDefinitions';
import { useIsMidOrHigerSizeScreen } from '../../../hooks/usefullHooks';
import { SingInUpButton } from '../../commons/LoginButton/LoginButton';
// import { loginService } from '../../../services/login/loginService';
import {
  AuthContext,
  SignInDataProps,
} from '../../wrappers/WebsitePage/context/AuthContext';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context/index';

type TransitionProps = Omit<SlideProps, 'direction'>;

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(5, 'Preencha ao menos 5 caracteres'),
  senha: yup
    .string()
    .required('A "Senha" é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

// const LoginButton = styled(Button)({
//   width: '15.2rem',
//   height: '3rem',
//   borderRadius: '1.5rem',
//   textTransform: 'uppercase',
//   fontWeight: '600',
//   margin: '10px 0',
// });

// interface FormSignInProps {
//   buttonChange: HTMLElement | null;
// }
// const TransitionDown = (props: TransitionProps): JSX.Element => (
//   <Slide {...props} direction="down" />
// );

const FormSignIn = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm<SignInDataProps>({ resolver: yupResolver(loginSchema) });

  // const [userSession, setUserSession] = useState({});
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  // const [isSmallScreen, setIsSmallScreen] = useState(true);
  const websitePageContext = useContext(WebsitePageContext);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const initialValues: SignInDataProps = {
    email: '',
    password: '',
  };

  // const router = useRouter();
  const { alertTimes } = globalDefinitions;

  // const { signIn } = useContext(AuthContext);

  async function handleSignIn({ email, password }: SignInDataProps) {
    // await signIn({ email, password });
    console.log(email, password);
  }

  // const onSubmit: SubmitHandler<SignInDataProps> = ({ email, password }) => {
  //   loginService
  //     .login({
  //       email, // 'omariosouto'
  //       password, // 'senhasegura'
  //     })
  //     .then((serverResponse) => {
  //       setUserSession(serverResponse);
  //       console.log('serverResponse', serverResponse);

  //       router.push('/app/profile');
  //     })
  //     .catch((err) => {
  //       // Desafio: Mostrar o erro na tela
  //       // eslint-disable-next-line no-console
  //       // setUserSession({ noUser: true });
  //       setOpenAlert(true);
  //       // console.error(err.status);
  //       // console.log('serverResponseError', err);
  //       console.log(err);
  //     });
  //   // .finally(() => {
  //   //   form.setIsFormDisabled(false);
  //   // });
  // };

  function handleCloseAlert(_event?: React.SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  }

  const isSmallScreen = useIsMidOrHigerSizeScreen() ? undefined : 'small';

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  //   <Stack
  //   component="form"
  //   id="signUpForm"
  //   className="signUpForm"
  //   onSubmit={handleSubmit(onSubmit)}
  //   direction="column"
  //   justifyContent="center"
  //   alignItems="center"
  //   spacing={2}
  //   sx={{
  //     transition: 'all 0.2s 0.7s',
  //     overflow: 'hidden',
  //     gridColumn: '1 / 2',
  //     gridRow: '1 / 2',
  //     mb: 2,
  //   }}
  // >

  return (
    <Stack
      component="form"
      id="signInForm"
      className="signInForm"
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={handleSubmit(handleSignIn)}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // padding: '0rem 5rem',
        mt: { xs: '-180px', md: 0 },
        transition: 'all 0.2s 0.7s',
        overflow: 'hidden',
        gridColumn: '1 / 2',
        gridRow: '1 / 2',
      }}
    >
      <Typography variant="h3" color="textSecondary" sx={{ mb: 2 }}>
        Sign in
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue={initialValues.email}
        render={({ field }) => (
          <TextField
            label="E-mail"
            {...field}
            required
            {...register('email', { required: true, minLength: 2 })}
            variant="outlined"
            size={isSmallScreen}
            autoComplete="email"
            sx={{ mb: 2, width: { xs: '70%', md: '45%' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue={initialValues.password}
        render={({ field }) => (
          <TextField
            label="Senha"
            {...field}
            required
            {...register('password', { required: true, minLength: 4 })}
            variant="outlined"
            size={isSmallScreen}
            autoComplete="current-password"
            sx={{ mb: 2, width: { xs: '70%', md: '45%' } }}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon color="disabled" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={setShowPassword(!showPassword)}
                    // eslint-disable-next-line react/jsx-no-bind
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <SingInUpButton>Login</SingInUpButton>
    </Stack>

    // <Snackbar
    //   id="loginError"
    //   open={openAlert}
    //   autoHideDuration={alertTimes.long}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //   // eslint-disable-next-line react/jsx-no-bind
    //   onClose={handleCloseAlert}
    //   TransitionComponent={TransitionDown}
    // >
    //   <Alert severity="error" variant="filled" onClose={handleCloseAlert}>
    //     <AlertTitle>Erro de login</AlertTitle>
    //     Usuário ou senha inválidos
    //   </Alert>
    // </Snackbar>
  );
};

export default FormSignIn;
