import Filter from '../../../features/filter/ui';
import FilterMenu from '../../../shared/ui/FilterMenu/FilterMenu';

export const categories: string[] = [
  'A New Hope',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'The Phantom Menace',
  'Attack of the Clones',
  'Revenge of the Sith',
];

export const genders: string[] = ['male', 'female', 'hermaphrodite', 'n/a'];

const FilterWidget: React.FC = () => {
  return (
    <FilterMenu title="Filters">
      <Filter list={genders} filterName="genders" title="Genders" />
      <Filter list={categories} filterName="filmTitles" title="Films" />
    </FilterMenu>
  );
};

export default FilterWidget;
