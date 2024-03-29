import { loadStatusDefault } from "../../constants/defaults";
import { SET_LOAD_STATUS, SET_PROPERTY_LOAD_STATUS } from "../../constants/redux";

export const loadStatus = (state = loadStatusDefault, action: any) => {
  switch(action.type) {
    case SET_LOAD_STATUS:
      return action.loadStatus;
    case SET_PROPERTY_LOAD_STATUS:
      return { ...state, properties: action.propertiesStatus };
    default:
      return state;
  }
}
