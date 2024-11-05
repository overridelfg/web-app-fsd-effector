import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteDescription, RouteName } from '../shared/config/routes.config';
import MainLayout from '../widgets/main-layout/ui/MainLayout';
const CharachterListPage = lazy(() => import('../pages/character-list'));
const CharacterInfoPage = lazy(() => import('../pages/character-info'));
const HomePage = lazy(() => import('../pages/home'));

const { HOME_PAGE, CHARACTER_INFO_PAGE, CHARACTER_LIST_PAGE } = RouteName;

const routes: RouteDescription[] = [
  {
    path: HOME_PAGE,
    component: HomePage,
  },
  {
    path: CHARACTER_LIST_PAGE,
    component: CharachterListPage,
  },
  {
    path: CHARACTER_INFO_PAGE,
    component: CharacterInfoPage,
  },
];

const routesContent = routes.map(({ path, component: Component }) => (
  <Route key={path} path={path} element={<Component />} />
));

export const AppRouter: React.FC = () => {
  return (
    <Suspense>
      <MainLayout>
        <Routes>{routesContent}</Routes>
      </MainLayout>
    </Suspense>
  );
};
