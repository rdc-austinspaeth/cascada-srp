import { combineReducers } from "redux";

import { loadStatus } from "./loadStatus";
import { propertiesReducer } from './properties.reducer';

export default combineReducers({
  loadStatus,
  properties: propertiesReducer,
});
