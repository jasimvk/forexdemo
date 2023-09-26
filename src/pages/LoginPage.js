import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Grid, Card } from '@mui/material';
import GoldSpotRateComponent from '../components/GoldSpotRateComponent ';
import SilverSpotRateComponent from '../components/SilverSpotRateComponent ';
import GoldValueCalculator from '../components/GoldValueCalculator';
import GoldPriceTable from '../components/GoldPriceTable';
import useResponsive from '../hooks/useResponsive';
import ExchangeRateComponent from '../components/ExchangeRateComponent';
import Logo from '../components/logo';
import DateTimeView from '../components/DateTimeView';

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    width: '100%',
    maxHeight: '100vh',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    width: '100%',
  },
}));

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  const containerStyle = {
    backgroundImage: 'url("/assets/forexBg.svg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // You can adjust the height as needed
  };
  return (
    <>
      <Helmet>
        <title>Forex Gold | Demo</title>
      </Helmet>

      <Container maxWidth="xl" style={containerStyle}>
        <Grid container spacing={0}> {/* Removed spacing */}
          <Grid item xs={1} md={1} lg={1}>

            <Card sx={{ m: 2 }}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                logo
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={0} lg={9}>
            <ExchangeRateComponent />
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <DateTimeView />
          </Grid>
        </Grid>
        <GoldSpotRateComponent />
        <SilverSpotRateComponent />
        <GoldValueCalculator/>
        <GoldPriceTable/>
      </Container>
    </>
  );
}
