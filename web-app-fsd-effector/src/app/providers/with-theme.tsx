import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useUnit } from 'effector-react';
import { themeModel } from '../../features/theme';

const withTheme = (component: () => React.ReactNode) => () => {
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
      {component()}
    </ThemeProvider>
  );
};

export default withTheme;
