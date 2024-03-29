import { SET_PROPERTY_LOAD_STATUS } from "../../constants/redux";

export const setPropertyLoadStatus = (propertiesStatus: boolean) => ({ type: SET_PROPERTY_LOAD_STATUS, propertiesStatus });
