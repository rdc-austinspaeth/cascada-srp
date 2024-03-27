import { actionTypes } from "../../constants/redux";

export const loadStatus = (state = false, action: any) => {
  switch(action.type) {
    case actionTypes.SET_LOAD_STATUS:
      return action.loadStatus;
    default:
      return state;
  }
}
