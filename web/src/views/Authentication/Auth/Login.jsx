import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../AuthForms/AuthLogin';
import Logo from 'ui-component/Logo';

import { useTranslation } from 'react-i18next';

// ================================|| AUTH - LOGIN ||================================ //

const Login = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', height: '100vh', px: { xs: 3, sm: 4, md: 12 }, overflow: 'hidden' }}>
        <Grid item sx={{ width: '100%', maxWidth: 450 }}>
          <AuthCardWrapper>
            <Grid container spacing={0} alignItems="center" justifyContent="center">
              {/* Logo Section */}
              <Grid item xs={12} sx={{ mb: 2, mt: 2 }}>
                <Grid container justifyContent="center">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo />
                  </Link>
                </Grid>
              </Grid>
              
              {/* Title Section */}
              <Grid item xs={12} sx={{ mb: 4 }}>
                <Stack alignItems="center" spacing={1}>
                  <Typography 
                    variant={matchDownSM ? 'h4' : 'h3'} 
                    fontWeight={600} 
                    color="text.primary"
                    sx={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {t('menu.login')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('login.welcomeBack') || '欢迎回来，请登录您的账户'}
                  </Typography>
                </Stack>
              </Grid>
              
              {/* Login Form */}
              <Grid item xs={12}>
                <AuthLogin />
              </Grid>
              
              {/* Divider */}
              <Grid item xs={12} sx={{ my: 3 }}>
                <Divider sx={{ 
                  borderColor: theme.palette.grey[200],
                  '&::before, &::after': {
                    borderColor: 'transparent'
                  }
                }} />
              </Grid>
              
              {/* Register Link */}
              <Grid item xs={12}>
                <Grid container direction="column" alignItems="center">
                  <Typography 
                    component={Link} 
                    to="/register" 
                    variant="body2" 
                    color="primary"
                    sx={{ 
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px'
                      }
                    }}
                  >
                    {t('menu.signup')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
