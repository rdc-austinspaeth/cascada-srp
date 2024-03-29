import { propertiesDefault } from '../../constants/defaults';
import { SET_PROPERTIES } from '../../constants/redux';

export const properties = (state = propertiesDefault, action: any) => {
  switch (action.type) {
    case SET_PROPERTIES:
      return action.properties?.home_search?.properties || state;
    default:
      return state;
  }
}
