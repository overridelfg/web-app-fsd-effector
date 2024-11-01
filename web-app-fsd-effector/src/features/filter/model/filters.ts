import { createEvent, createStore } from 'effector';
import { TFilterState, TFiltersPayload } from './filters.types';
import { useUnit } from 'effector-react';

const updateListQueryParam = createEvent<TFiltersPayload>();

export const $filters = createStore<TFilterState>({
  queryParams: {
    filmTitles: [],
    genders: [],
  },
}).on(updateListQueryParam, (state, payload) => {
  const newState = { ...state };
  const { key, value } = payload;
  if (value !== '') {
    if (key === 'filmTitles' || key === 'genders') {
      if (newState.queryParams[key].find((name) => name === value)) {
        newState.queryParams[key] = newState.queryParams[key].filter(
          (name) => name !== value,
        );
      } else {
        newState.queryParams[key].push(value);
      }
    }
  }

  return newState;
});

const useFilters = () => useUnit($filters);

export const selectors = { useFilters };
export const events = { updateListQueryParam };
