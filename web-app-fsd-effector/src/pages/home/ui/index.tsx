import { CharacterListCard } from '../../../entities/character/ui/characterPageCard/CharacterListCard';
import { TPerson } from '../../../shared/api/models';

const HomePage: React.FC = () => {
  return (
    <div>
      <CharacterListCard character={{} as TPerson} />
    </div>
  );
};

export default HomePage;
