import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import i18nList from 'i18n/i18nList';
import useI18n from 'hooks/useI18n';
import Flags from 'country-flag-icons/react/3x2';

export default function I18nButton() {
  const i18n = useI18n();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    handleMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen} sx={{ color: 'inherit' }}>
        <Icon icon="solar:global-linear" width="1.3rem" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {i18nList.map((item) => {
          const FlagComponent = Flags[item.countryCode];
          return (
            <MenuItem
              key={item.lng}
              onClick={() => handleLanguageChange(item.lng)}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              {FlagComponent && (
                <Box
                  sx={{
                    width: '1.45rem',
                    height: '1.125rem',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FlagComponent style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
              )}
              <Typography variant="body1">{item.name}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
