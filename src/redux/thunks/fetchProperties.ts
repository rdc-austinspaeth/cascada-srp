import { Dispatch } from 'redux';

import client from '../../apolloClient';
import { PROPERTY_SEARCH_QUERY } from '../../graphql/queries/getProperties';


const fetchPropertiesSuccess = (properties: any) => ({
  type: 'FETCH_PROPERTIES_SUCCESS',
  properties,
});

export const fetchPropertiesError = (error: any) => ({
  type: 'FETCH_PROPERTIES_ERROR',
  error,
});

export const fetchProperties = (variables: any) => {
  return async (dispatch:Dispatch) => {
  try {
    const { data: properties } = await client.query({
      query: PROPERTY_SEARCH_QUERY,
      variables,
    });
    dispatch(fetchPropertiesSuccess(properties));
  } catch (error) {
    dispatch(fetchPropertiesError(error));
  }
};
}