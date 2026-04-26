import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, Container, useMediaQuery } from '@mui/material';
import Header from './Header';
import Footer from 'ui-component/Footer';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const headerHeight = matchDownSm ? 56 : 64;
  const footerHeight = 56;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
          zIndex: theme.zIndex.drawer + 1,
          width: '100%',
          borderRadius: 0,
          height: `${headerHeight}px`,
          minHeight: `${headerHeight}px`
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 1.5, sm: 2, md: 3 }, minHeight: `${headerHeight}px`, height: `${headerHeight}px` }}>
            <Header />
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          flex: '1 0 auto',
          overflowY: 'auto',
          overflowX: 'hidden',
          marginTop: `${headerHeight}px`,
          marginBottom: `${footerHeight}px`,
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
            borderRadius: '4px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          }
        }}
      >
        <Outlet />
      </Box>
      <Box sx={{ flex: '0 0 auto', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MinimalLayout;
