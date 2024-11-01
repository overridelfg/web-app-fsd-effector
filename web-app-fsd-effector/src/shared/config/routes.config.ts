import { ComponentType } from 'react';

export enum RouteName {
  HOME_PAGE = '/',
  CHARACTER_LIST_PAGE = '/characters',
  CHARACTER_INFO_PAGE = '/character/:characterId',
}

export interface RouteDescription {
  path: RouteName;
  component: ComponentType;
}
