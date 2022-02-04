/* eslint-disable react/jsx-no-bind */
// import * as yup from 'yup';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import globalDefinitions from '../../../config/globalDefinitions';
import { useIsMidOrHigerSizeScreen } from '../../../hooks/usefullHooks';
import AxSnackbar, {
  AxSnackbarProps,
} from '../../commons/AxSnackbar/AxSnackbar';
import { SingInUpButton } from '../../commons/LoginButton/LoginButton';
import { UserProps } from '../../wrappers/WebsitePage/context/AuthContext';

type FormProps = {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

// const loginSchema = yup.object().shape({
//   usuario: yup
//     .string()
//     .required('"Usuario" é obrigatório')
//     .min(3, 'Preencha ao menos 3 caracteres'),
//   senha: yup
//     .string()
//     .required('"Senha" é obrigatória')
//     .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
// });

// const LoginButton = styled(Button)`
//   width: 15.2rem;
//   height: 3rem;
//   border-radius: 49px;
//   text-transform: uppercase;
//   font-weight: 600;
//   margin: 10px 0;
// `;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

interface FormSignUpProps {
  // eslint-disable-next-line no-unused-vars
  setIsSignUpMode: (arg0: boolean) => void;
}

const FormSignUp = ({ setIsSignUpMode }: FormSignUpProps): JSX.Element => {
  // eslint-disable-next-line no-unused-vars
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isSmallScreen = useIsMidOrHigerSizeScreen() ? undefined : 'small';

  const { alertTimes } = globalDefinitions;

  // eslint-disable-next-line no-console
  // console.log(submissionStatus);

  const [snackbarData, setSnackbarData] = useState<AxSnackbarProps>({
    id: '',
    severity: 'info',
    title: '',
    text: '',
  });

  const initialValues: FormProps = {
    firstName: '',
    surname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const {
    register,
    handleSubmit,
    getValues,
    control,
    // watch,
    // formState: { errors },
  } = useForm<FormProps>();

  type UserFormProps = UserProps & { passwordConfirmation: string };

  const onSubmit: SubmitHandler<UserFormProps> = (data) => {
    // console.log(JSON.stringify(data)); //! teste
    // setIsFormSubmited(true);

    fetch('http://localhost:4001/register', {
      method: 'POST',
      // mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((serverResponse) => {
        // eslint-disable-next-line prettier/prettier
        const snackbarHorizontalPosition: SnackbarOrigin = isSmallScreen
          ? { vertical: 'bottom', horizontal: 'center' }
          : { vertical: 'bottom', horizontal: 'right' };

        if (serverResponse.ok) {
          setSnackbarData({
            id: 'CreateUserSuccess',
            anchorOrigin: snackbarHorizontalPosition,
            severity: 'success',
            title: 'Usuário cadastro',
            text: 'Usuário cadastrado com sucesso!',
          });
          setOpenAlert(true);

          setTimeout(() => {
            setIsSignUpMode(false);
          }, 1000);

          return serverResponse.json();
        }

        if (serverResponse.status === 409) {
          // setServerResponseStatus(409);

          setSnackbarData({
            id: 'CreateUserError',
            anchorOrigin: snackbarHorizontalPosition,
            severity: 'error',
            title: 'Erro de Cadastro',
            text: 'Já existe usuário com este e-mail.',
          });

          setOpenAlert(true);

          return serverResponse.json();
        }

        throw new Error('Não foi possível cadastrar o usuário agora :(');
      })
      .then(() => {
        setSubmissionStatus(formStates.DONE);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        throw new Error(error);
      });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Stack
        component="form"
        id="signUpForm"
        className="signUpForm"
        onSubmit={handleSubmit(onSubmit)}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          transition: 'all 0.2s 0.7s',
          overflow: 'hidden',
          gridColumn: '1 / 2',
          gridRow: '1 / 2',
          mb: 2,
        }}
      >
        <Typography variant="h3" color="textSecondary" sx={{ mb: 2 }}>
          Sign up
        </Typography>

        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              // defaultValue={initialValues.firstName}
              label="Primeiro nome"
              variant="outlined"
              {...register('firstName', { required: true, minLength: 2 })}
              {...field}
              size={isSmallScreen}
              required
              autoComplete="given-name"
              sx={{ width: { xs: '70%', md: '35%' } }}
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
          name="surname"
          control={control}
          render={({ field }) => (
            <TextField
              // defaultValue={initialValues.surname}
              {...register('surname', { required: true, minLength: 2 })}
              variant="outlined"
              label="Sobrenome"
              size={isSmallScreen}
              required
              autoComplete="family-name"
              sx={{ width: { xs: '70%', md: '35%' } }}
              // name="email"
              // style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineTwoToneIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              // defaultValue={initialValues.email}
              label="E-mail"
              variant="outlined"
              {...field}
              {...register('email', { required: true, minLength: 2 })}
              size={isSmallScreen}
              required
              autoComplete="email"
              sx={{ width: { xs: '70%', md: '35%' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        {/* <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              type="password"
              // defaultValue={initialValues.password}
              {...register('password', {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              variant="outlined"
              label="Senha"
              size={isSmallScreen}
              autoComplete="new-password"
              // name="email"
              style={{ marginBottom: '1rem' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
              {...field}
            />
          )}
        /> */}
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
              sx={{ width: { xs: '70%', md: '35%' } }}
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

        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <TextField
              label="Confirme a senha"
              type="password"
              // defaultValue={initialValues.passwordConfirmation}
              {...field}
              variant="outlined"
              {...register('passwordConfirmation', {
                required: 'Confirme a senha!',
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || 'A senhas devem ser iguais';
                  },
                },
              })}
              size={isSmallScreen}
              autoComplete="new-password"
              required
              sx={{ width: { xs: '70%', md: '35%' } }}
              // name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyOutlinedIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <SingInUpButton>Sign Up</SingInUpButton>
      </Stack>

      {openAlert && (
        <AxSnackbar
          id={snackbarData.id}
          // open={snackbarData.open}
          autoHideDuration={alertTimes.normal}
          anchorOrigin={snackbarData.anchorOrigin}
          severity={snackbarData.severity}
          title={snackbarData.title}
          text={snackbarData.text}
          setOpenAlert={setOpenAlert}
          openAlert={openAlert}
        />
      )}
    </>
  );
};

export default FormSignUp;
