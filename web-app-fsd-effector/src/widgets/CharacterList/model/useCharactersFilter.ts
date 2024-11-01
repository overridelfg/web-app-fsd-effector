import { TPerson } from '../../../shared/api/models';
import { $filters } from '../../../features/filter/model/filters';
import { useUnit } from 'effector-react';

export const useCharactersFilter = (data: TPerson[] | undefined | null) => {
  const filterStore = useUnit($filters);

  let filteredCharacters;
  if (data) {
    filteredCharacters = data.filter((character) => {
      const matchesFilm = filterStore.queryParams.filmTitles.length
        ? character.filmConnection.films.some((film) =>
            filterStore.queryParams.filmTitles.includes(film.title),
          )
        : true;

      const matchesGender = filterStore.queryParams.genders.length
        ? filterStore.queryParams.genders.includes(character.gender)
        : true;

      return matchesFilm && matchesGender;
    });
    if (
      filterStore.queryParams.filmTitles.length < 1 &&
      filterStore.queryParams.genders.length < 1
    ) {
      filteredCharacters = data;
    }
  }

  return { filteredCharacters };
};
