import { createApi, createStore } from 'effector';
import { storage } from '../../shared/lib/fp/localstorage';

export const $theme = createStore<'dark' | 'light'>(
  storage.get('theme') || 'dark',
);

export const themeApi = createApi($theme, {
  set: (_, payload: 'dark' | 'light') => {
    storage.set('theme', payload);
  },
});
