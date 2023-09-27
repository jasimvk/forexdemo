import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Grid, Card, Box } from '@mui/material';
import ExchangeRateComponent from '../components/ExchangeRateComponent';
import GoldSpotRateComponent from '../components/GoldSpotRateComponent ';
import SilverSpotRateComponent from '../components/SilverSpotRateComponent ';
import GoldValueCalculator from '../components/GoldValueCalculator';
import TradingViewWidget from '../components/TradingViewWidget';
import GoldPriceTable from '../components/GoldPriceTable';
import GoldPriceNewsTicker from '../components/GoldPriceNewsTicker ';
import FloatingButton from '../components/FloatingButton';
import useResponsive from '../hooks/useResponsive';
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
    zoom: 1, // Disable zooming
  };
  
  return (
    <>
      <Helmet>
        <title>Forex Gold | Demo</title>
      </Helmet>

      <Container maxWidth="xl" style={containerStyle}>
        <Grid container spacing={mdUp ? 3 : 0}>
          <Grid item xs={12} md={3} lg={3}>
            <Box
              component="img"
              src="/assets/Demologo.png"
              sx={{ height: 45, m: 4 }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <ExchangeRateComponent />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <DateTimeView />
          </Grid>
          <Grid item xs={12} md={4} lg={4}  >
            <GoldSpotRateComponent />
            <GoldValueCalculator />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Card style={{height:'80%'}}>
              <TradingViewWidget />
            </Card>
          </Grid>
        </Grid>
        <FloatingButton />
      </Container>
    </>
  );
}
