import { Box, Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Header } from '../../header/ui';

interface MainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
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
  );
};

export default MainLayout;
