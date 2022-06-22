import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4ouhi3c16i101xkfdtsbi7f/master',
    cache: new InMemoryCache(),
});
