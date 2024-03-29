import { combineReducers } from "redux";

import { loadStatus } from "./loadStatus.reducer";
import { properties } from './properties.reducer';

export default combineReducers({
  loadStatus,
  properties,
});
