import { combine, createEvent, createStore } from 'effector';
import { getFilteredList } from '../lib/getFilteredList';

export const updateFilmTitlesQueryParam = createEvent<string>();
export const updateGendersQueryParam = createEvent<string>();
export const setFilterMenuVisability = createEvent<void>();

export const $filterMenuVisability = createStore<boolean>(false).on(
  setFilterMenuVisability,
  (state, _) => !state,
);

export const $filmTitlesFilter = createStore<string[]>([]).on(
  updateFilmTitlesQueryParam,
  (state, payload) => {
    return getFilteredList(state, payload);
  },
);

export const $gendersFilter = createStore<string[]>([]).on(
  updateGendersQueryParam,
  (state, payload) => {
    return getFilteredList(state, payload);
  },
);

export const $filtersList = combine(
  $filmTitlesFilter,
  $gendersFilter,
  (filmTitlesFilter, gendersFilter) => ({
    filmTitles: filmTitlesFilter,
    genders: gendersFilter,
  }),
);
