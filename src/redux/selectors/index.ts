import { RootState } from "../store";

export const loadStatusSelector = (state: RootState) => state?.loadStatus;
export const propertiesSelector = (state: RootState) => state?.properties;
