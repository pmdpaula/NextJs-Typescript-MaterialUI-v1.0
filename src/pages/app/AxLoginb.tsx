/* eslint-disable react/jsx-one-expression-per-line */
import { Theme } from '@mui/material';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// import { useRouter } from 'next/router';
// import { signIn, signOut, useSession } from 'next-auth/client';
// import { useContext } from 'react';
// import { useEffect } from 'react';
import PageSquare from '../../components/commons/PageSquare/PageSquare';
// import { AuthContext } from '../../components/wrappers/WebsitePage/context/AuthContext';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc/index';
// import { loginService } from '../../services/login/loginService';

const pageName = 'Perfil';

const PageProfile = () => (
  // const websitePageContext = useContext(WebsitePageContext);
  // const [session, loading] = useSession();
  // const router = useRouter();
  // const { userData, userRoles } = useContext(AuthContext);
  // console.log('userData', userData);
  // console.log('userRoles', userRoles);

  // const handleClickLogin = (e: MouseEvent) => {
  //   e.preventDefault();
  //   router.push('/app/login');
  // };
  // useEffect(() => {
  //   const userInfo = loginService.getUserInfo();
  //   console.log('userInfo', userInfo);
  // }, []);

  <PageSquare>
    <Typography>{pageName}</Typography>
    <Typography variant="h4">Dados do usuário</Typography>
    <Divider variant="middle" style={{ margin: '5px 0' }} />
    {/* {session ? ( */}
    <Box display="flex" flexDirection="column" alignItems="start">
      quadro
      {/* <Grid item>
            <Typography>{`Nome: ${user?.name}`}</Typography>
          </Grid>
          <Grid item>
            <Typography>{`Username: ${user?.username}`}</Typography>
          </Grid>
          <Grid item>
            <Typography>{`E-mail: ${user?.email}`}</Typography>
          </Grid>
          <Grid item>
            <Avatar src={user?.avatarUrl} alt="Avatar do Usuário" />
          </Grid> */}
      {/* <Image
            src={user.avatarUrl}
            alt="Avatar do usuário"
            width={200}
            height={100}
          /> */}
    </Box>
    {/* ) : ( */}
    <Box display="flex" flexDirection="column" alignItems="center">
      {/* <CircularProgress /> */}
      Você não está logado
      <Button variant="contained" color="primary" href="/app/login">
        Conectar
      </Button>
    </Box>
    {/* )} */}
  </PageSquare>
);

export default websitePageHOC(PageProfile, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
    footerProps: {
      content: 'Copyright AxeBlade Software',
    },
  },
});

// export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
//   // const apiClient = getAPIClient(ctx);
//   const { 'nextauth.token': token } = parseCookies(ctx);
//   console.log('server Profile token:', token);

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/app/login/',
//         permanent: false,
//       },
//     };
//   }

//   // await apiClient.get('/users');

//   return {
//     props: {},
//   };
// };
