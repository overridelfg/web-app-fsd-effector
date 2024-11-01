import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCharacterList } from '../../../entities/character/model/characterList';
import { useCharactersFilter } from '../model/useCharactersFilter';
import Breadcrumbs from '../../../shared/ui/Breadcrumbs/Breadcrumbs';
import { TPerson } from '../../../shared/api/models';
import { CharacterListCard } from '../../../entities/character/ui/characterPageCard/CharacterListCard';

const CharacterList: React.FC = () => {
  const { loading, error, data } = useCharacterList();

  const { filteredCharacters } = useCharactersFilter(data?.allPeople.people);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
      }}
    >
      <Breadcrumbs
        crumbs={[
          {
            link: '/',
            title: 'Home',
          },
          {
            link: '/characters',
            title: 'Characters',
          },
        ]}
      />

      {loading ? (
        <CircularProgress
          data-testid={'characterListLoading'}
          sx={{ alignSelf: 'center' }}
        />
      ) : null}
      {error?.message && (
        <Typography data-testid={'characterListError'}>
          {error.message}
        </Typography>
      )}

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {filteredCharacters &&
          filteredCharacters.map((person: TPerson) => {
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
    </Box>
  );
};

export default CharacterList;
