import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../shared/api/apollo-clients';

const withApollo = (component: () => React.ReactNode) => () => (
  <ApolloProvider client={apolloClient}>{component()}</ApolloProvider>
);

export default withApollo;
