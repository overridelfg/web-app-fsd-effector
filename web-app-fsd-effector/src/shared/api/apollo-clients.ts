import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "../config/graphql.config";

export const apolloClient = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
})