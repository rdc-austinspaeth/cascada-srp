import { actionTypes } from '../../constants/redux';

const initialState = {
  loading: false,
  properties: [],
  error: null,
};

export const propertiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.properties,
      };
    case actionTypes.SET_PROPERTIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.SET_PROPERTIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}