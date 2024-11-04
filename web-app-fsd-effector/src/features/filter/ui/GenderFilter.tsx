import { useUnit } from 'effector-react';
import FilterCheckboxList from '../../../shared/ui/FilterCheckboxList/FilterCheckboxList';
import { filtersModel } from '../model';

interface GendersFilterProps {}

export const genders: string[] = ['male', 'female', 'hermaphrodite', 'n/a'];

export const GendersFilter: React.FC<GendersFilterProps> = () => {
  const { $gendersFilter, updateGendersQueryParam } = filtersModel;
  const selectedFilters = useUnit($gendersFilter);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateGendersQueryParam(event.target.value);
  };
  return (
    <FilterCheckboxList
      filterHandler={filterHandler}
      filterList={genders}
      filterName={'filmTitles'}
      title="Films"
      selectedFilters={selectedFilters}
    />
  );
};
