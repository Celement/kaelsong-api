// material-ui
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect, useContext } from 'react';
import { UserContext } from 'contexts/UserContext';

// ==============================|| AUTHENTICATION WRAPPER ||============================== //

const AuthStyle = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  height: '100vh',
  maxHeight: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  overflowY: 'hidden',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}10 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}10 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}08 0%, transparent 40%)`,
    pointerEvents: 'none'
  }
}));

// eslint-disable-next-line
const AuthWrapper = ({ children }) => {
  const account = useSelector((state) => state.account);
  const { isUserLoaded } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isUserLoaded && account.user) {
      navigate('/panel');
    }
  }, [account, navigate, isUserLoaded]);

  // 在用户信息加载完成前显示加载状态
  if (!isUserLoaded) {
    return <AuthStyle>加载中...</AuthStyle>;
  }

  return <AuthStyle> {children} </AuthStyle>;
};

export default AuthWrapper;
