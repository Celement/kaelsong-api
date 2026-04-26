import { IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { useNotice } from './NoticeContext';

export function NoticeButton() {
  const { openNotice } = useNotice();

  return (
    <IconButton onClick={openNotice} sx={{ color: 'inherit' }}>
      <Icon icon="solar:bell-linear" width="1.3rem" />
    </IconButton>
  );
}
