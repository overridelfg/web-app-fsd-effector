import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { PropsWithChildren } from 'react';

interface MenuProps extends PropsWithChildren {
  title: string;
  isVisible: boolean;
  setIsVisible: () => void;
}

const Menu: React.FC<MenuProps> = ({
  children,
  title,
  isVisible,
  setIsVisible,
}) => {
  return (
    <Box>
      <Button variant="contained" onClick={setIsVisible}>
        {title}
        {isVisible ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
      </Button>
      <Box
        sx={{
          display: `${isVisible ? 'block' : 'none'}`,
          marginTop: '1rem',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Menu;
