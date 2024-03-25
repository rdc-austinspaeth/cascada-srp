import { SET_LOAD_STATUS } from "../../constants/redux";

export const loadStatus = (state = false, action: any) => {
  switch(action.type) {
    case SET_LOAD_STATUS:
      return action.loadStatus;
    default:
      return state;
  }
}
