import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Grid, Card } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import DateTimeView from '../components/DateTimeView';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    width: "100%",
    maxHeight: '100vh',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    width: "100%",
    // height:"100%"
  },
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Forex Gold | Demo </title>
      </Helmet>

      <Container maxWidth="xl">


        <Grid container spacing={3}>


          <Grid item xs={12} md={10} lg={10}>
            
              <Typography variant="h4" sx={{ mb: 5 }}>
                logo
              </Typography>
            
          </Grid>

          <Grid item xs={12} md={2} lg={2}>
            <DateTimeView />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
