import { Box } from '@mui/material';
import Breadcrumbs from '../../../shared/ui/Breadcrumbs/Breadcrumbs';
import { CharacterListWithFilter } from '../../../widgets/character-list-with-filter';

const CharacterListPage: React.FC = () => {
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

      <CharacterListWithFilter />
    </Box>
  );
};

export default CharacterListPage;
