import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useUnit } from 'effector-react';
import { themeModel } from '../../../features/theme';

const Header: React.FC = () => {
  const { $theme, themeApi } = themeModel;
  const currentTheme = useUnit($theme);

  const toggleTheme = () => {
    themeApi.set(currentTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <img
        style={{
          width: '5rem',
          height: '5rem',
        }}
      />
      <Button onClick={toggleTheme}>
        {currentTheme === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
      </Button>
    </Box>
  );
};

export default Header;
