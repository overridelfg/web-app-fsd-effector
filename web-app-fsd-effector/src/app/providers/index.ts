import { compose } from '../../shared/lib/fp/compose';
import withApollo from './with-apollo';
import withRouter from './with-router';
import withTheme from './with-theme';

export const withProviders = compose<React.FC>(
  withRouter,
  withApollo,
  withTheme,
);
