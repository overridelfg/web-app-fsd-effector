import { withProviders } from './providers';
import { AppRouter } from './router';

const App: React.FC = () => {
  return <AppRouter />;
};

export default withProviders(App);
