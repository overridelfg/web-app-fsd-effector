import { useQuery } from '@apollo/client';
import { TGetCharactersQuery } from '../../../shared/api/models';
import { GET_CHARACTERS } from './queries';

export const useCharacterList = () =>
  useQuery<TGetCharactersQuery>(GET_CHARACTERS);
