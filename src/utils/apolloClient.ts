import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
uri:'https://www.realtor.com/api/v1/rdc_search_srp?client_id=rdc-search-for-sale-search&schema=vesta',
  cache: new InMemoryCache(),
});

export default client;
