import { useUnit } from 'effector-react';
import {
  FilmTitlesFilter,
  FilterMenu,
  GendersFilter,
} from '../../../features/filter/ui';
import { filtersModel } from '../../../features/filter/model';
import { CharacterList } from '../../../features/character/character-list/ui';

const CharacterListWithFilter: React.FC = () => {
  const { $filtersList } = filtersModel;
  const filtersStore = useUnit($filtersList);

  return (
    <>
      <FilterMenu>
        <GendersFilter />
        <FilmTitlesFilter />
      </FilterMenu>
      <CharacterList filter={filtersStore} />
    </>
  );
};

export default CharacterListWithFilter;
