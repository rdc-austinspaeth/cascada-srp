import client from "./utils/apolloClient";
import { PROPERTY_SEARCH_QUERY } from "./graphql/queries/propertyQuery";

export const getTestData = async () => {
  const variables = {
    geoSupportedSlug: '',
    query: {
      primary: true,
      status: ['for_sale', 'ready_to_build'],
      search_location: {
        location: 'South Carolina',
      },
    },
    client_data: {
      device_data: {
        device_type: 'desktop',
      },
    },
    limit: 42,
    offset: 0,
    sort_type: 'relevant',
  };

  const { data } = await client.query({
    query: PROPERTY_SEARCH_QUERY,
    variables,
  });

  return {
    properties: data?.home_search?.properties || [],
    loadStatus: {
      properties: true,
    }
  };
};
