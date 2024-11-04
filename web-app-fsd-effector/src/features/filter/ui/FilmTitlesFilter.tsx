import { useUnit } from 'effector-react';
import FilterCheckboxList from '../../../shared/ui/FilterCheckboxList/FilterCheckboxList';
import { filtersModel } from '../model';

interface FilmTitlesFilterProps {}

export const categories: string[] = [
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
];

export const FilmTitlesFilter: React.FC<FilmTitlesFilterProps> = () => {
  const { $filmTitlesFilter, updateFilmTitlesQueryParam } = filtersModel;
  const selectedFilters = useUnit($filmTitlesFilter);

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFilmTitlesQueryParam(event.target.value);
  };
  return (
    <FilterCheckboxList
      filterHandler={filterHandler}
      filterList={categories}
      filterName={'filmTitles'}
      title="Films"
      selectedFilters={selectedFilters}
    />
  );
};
