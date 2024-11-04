import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useUnit } from 'effector-react';
import { PropsWithChildren } from 'react';
import { Header } from '../../widgets/header/ui';
import { themeModel } from '../../features/theme';

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { $theme } = themeModel;
  const currentTheme = useUnit($theme);

  const darkTheme = createTheme({
    palette: {
      mode: currentTheme,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 550,
        lg: 800,
        xl: 1000,
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        sx={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          height: '100vh',
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Header />
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
