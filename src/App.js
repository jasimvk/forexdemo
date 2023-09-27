import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import LoginPage from './pages/LoginPage';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <div style={
      {
        backgroundImage:
          "url('/assets/forexBg.jpg')",
        height: '100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    }>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            {/* <ScrollToTop />
          <StyledChart /> */}
            <LoginPage />
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider></div>
  );
}
