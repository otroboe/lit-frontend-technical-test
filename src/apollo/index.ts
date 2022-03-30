import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER_ENDPOINT,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // Help from here: https://www.apollographql.com/docs/react/pagination/core-api/#defining-a-field-policy
          allPosts: {
            // Don't cache separate results based on any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
