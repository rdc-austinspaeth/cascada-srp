import { RootState } from "../store";

export const loadStatusSelector = (state: RootState) => state?.loadStatus;
