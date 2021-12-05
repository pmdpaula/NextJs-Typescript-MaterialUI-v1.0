import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Image from 'next/image';

import axbLogo from '../../public/AxBladeSoftware_logo_nome_dark.svg';

const Home: NextPage = () => (
  <Container maxWidth="lg">
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ marginBottom: 6 }}>
        <Image src={axbLogo} />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        AxaBlade - Template base
      </Typography>
      <Typography variant="h6" gutterBottom>
        Modelo base de uma WebApplication com Nextjs 12, Material UI v5
      </Typography>
    </Box>
  </Container>
);

export default Home;
