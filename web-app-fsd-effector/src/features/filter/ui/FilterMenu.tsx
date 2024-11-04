import { PropsWithChildren } from 'react';
import Menu from '../../../shared/ui/Menu/Menu';
import { filtersModel } from '../model';
import { useUnit } from 'effector-react';

interface FilterMenuProps extends PropsWithChildren {}

export const FilterMenu: React.FC<FilterMenuProps> = ({ children }) => {
  const { $filterMenuVisability, setFilterMenuVisability } = filtersModel;

  const isFilterMenuVisible = useUnit($filterMenuVisability);

  return (
    <Menu
      title="Filters"
      isVisible={isFilterMenuVisible}
      setIsVisible={() => setFilterMenuVisability()}
    >
      {children}
    </Menu>
  );
};
