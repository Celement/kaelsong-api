import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const siteInfo = useSelector((state) => state.siteInfo);
  const theme = useTheme();

  return (
    <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, bgcolor: 'background.default' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '56px',
          px: { xs: 2, md: 3 }
        }}
      >
        {siteInfo.footer_html ? (
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <div className="custom-footer" dangerouslySetInnerHTML={{ __html: siteInfo.footer_html }}></div>
          </Box>
        ) : (
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} {siteInfo.system_name || '博客随笔'} · All rights reserved.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
