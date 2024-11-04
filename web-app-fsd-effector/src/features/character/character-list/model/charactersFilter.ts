import { useQuery } from '@apollo/client';
import { TGetCharactersQuery } from '../../../../shared/api/models';
import { GET_CHARACTERS } from '../../../../entities/character/model/queries';
import { TFilter } from '../../../../shared/types/filters.types';

export const useCharacterList = (filters: TFilter) => {
  const { data } = useQuery<TGetCharactersQuery>(GET_CHARACTERS);

  const characterList = data?.allPeople.people;
  if (filters.filmTitles.length < 1 && filters.genders.length < 1) {
    return characterList;
  }

  if (characterList) {
    const filteredCharacters = characterList.filter((character) => {
      const matchesFilm = filters.filmTitles.length
        ? character.filmConnection.films.some((film) =>
            filters.filmTitles.includes(film.title),
          )
        : true;

      const matchesGender = filters.genders.length
        ? filters.genders.includes(character.gender)
        : true;

      return matchesFilm && matchesGender;
    });

    return filteredCharacters;
  }
};
