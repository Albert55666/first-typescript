import { createSelector } from "reselect";
import { IRootState } from "../../type";

const selectHome = (state: IRootState) => state.home;

export const selectedCoinL = createSelector(
  selectHome,
  (home) => home.coinList
);
