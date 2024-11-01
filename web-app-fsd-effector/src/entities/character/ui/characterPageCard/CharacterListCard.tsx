import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { decodeBase64Id } from '../../../../shared/lib/string';
import { TPerson } from '../../../../shared/api/models';
import { useNavigate } from 'react-router-dom';
import { getCharacterPageUrl } from '../../lib';

interface CharacterCardProps {
  character: TPerson;
}

export const CharacterListCard: React.FC<CharacterCardProps> = ({
  character,
}) => {
  const { id: characterId } = character;

  const navigate = useNavigate();
  const handleCardClick = () =>
    navigate({ pathname: getCharacterPageUrl({ characterId }) });

  return (
    <Card
      variant="outlined"
      sx={{
        height: '20rem',
        transform: 'translate(0, 0)',
        '&:hover': {
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
          transform: 'translate(0, -2px)',
          border: '1px solid #cccccc',
        },
      }}
      onClick={handleCardClick}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${decodeBase64Id(
            character.id,
          )}.jpg`}
          loading="lazy"
          style={{
            height: '15rem',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ height: '4rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '1rem',
              fontWeight: '600',
              padding: '0.5rem',
              lineHeight: '1.3rem',
            }}
          >
            {character.name}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
