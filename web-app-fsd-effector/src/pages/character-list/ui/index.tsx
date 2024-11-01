import CharacterList from '../../../widgets/CharacterList/ui/CharacterList';
import FilterWidget from '../../../widgets/FilterWidget/ui/FilterWidget';

const CharacterListPage: React.FC = () => {
  return (
    <div>
      <FilterWidget />
      <CharacterList />
    </div>
  );
};

export default CharacterListPage;
