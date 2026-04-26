import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const Logo = () => {
  const siteInfo = useSelector((state) => state.siteInfo);
  const theme = useTheme();

  if (siteInfo.isLoading) {
    return null;
  }

  if (siteInfo.logo) {
    return <img src={siteInfo.logo} alt={siteInfo.system_name} height="32" />;
  }

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Icon
        icon="solar:pen-new-round-bold"
        width="26"
        style={{ color: theme.palette.primary.main }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: 'text.primary',
          letterSpacing: '-0.01em',
          fontSize: '1.2rem',
          lineHeight: 1
        }}
      >
        {siteInfo.system_name || '博客随笔'}
      </Typography>
    </Stack>
  );
};

export default Logo;
