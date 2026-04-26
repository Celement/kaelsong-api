import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from 'store/actions';
import { IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

export default function ThemeButton() {
  const dispatch = useDispatch();
  const defaultTheme = useSelector((state) => state.customization.theme);

  return (
    <IconButton
      onClick={() => {
        let theme = defaultTheme === 'light' ? 'dark' : 'light';
        dispatch({ type: SET_THEME, theme: theme });
        localStorage.setItem('theme', theme);
      }}
      sx={{ color: 'inherit' }}
    >
      {defaultTheme === 'light' ? (
        <Icon icon="solar:sun-2-linear" width="1.3rem" />
      ) : (
        <Icon icon="solar:moon-linear" width="1.3rem" />
      )}
    </IconButton>
  );
}
