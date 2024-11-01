import { RouteName } from '../../../shared/config/routes.config';

interface GetCharacterPageUrlParams {
  characterId: string;
}
export const getCharacterPageUrl = ({
  characterId,
}: GetCharacterPageUrlParams): string =>
  RouteName.CHARACTER_INFO_PAGE.replace(':characterId', characterId);
