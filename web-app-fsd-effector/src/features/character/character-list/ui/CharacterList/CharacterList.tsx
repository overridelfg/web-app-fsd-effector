import { Grid } from '@mui/material';
import { TPerson } from '../../../../../shared/api/models';
import { TFilter } from '../../../../../shared/types/filters.types';
import { characterListModel } from '../../model';
import { CharacterListCard } from '../../../../../entities/character/ui/characterPageCard/CharacterListCard';

interface CharacterListProps {
  filter: TFilter;
}

export const CharacterList: React.FC<CharacterListProps> = ({ filter }) => {
  const characterList = characterListModel.useCharacterList(filter);

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {characterList &&
        characterList.map((person: TPerson) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}
              key={person.name}
              data-testid={'characterListSuccess'}
            >
              <CharacterListCard character={person} />
            </Grid>
          );
        })}
    </Grid>
  );
};
