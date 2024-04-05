import client from '../../utils/apolloClient';
import { PROPERTY_SEARCH_QUERY } from '../../graphql/queries/propertyQuery';

import { setProperties } from './setProperties.action';
import { setPropertyLoadStatus } from './setPropertyLoadStatus.action';

export const getProperties = (variables: any) => {
  console.log("🚀 ~ getProperties ~ variables:", variables)
  return async (dispatch: Function) => {
    try {
      const { data: properties } = await client.query({
        query: PROPERTY_SEARCH_QUERY,
        variables,
      });
      console.log("🚀 ~ return ~ properties:", properties)

      dispatch(setProperties(properties));
      dispatch(setPropertyLoadStatus(true));
    } catch (error) {
      console.error(error);
      dispatch(setPropertyLoadStatus(true));
    }
  };
}
