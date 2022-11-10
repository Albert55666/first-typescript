import React from "react";
import { createSelector } from "reselect";
import { useAppSelector } from "../hooks";
import { selectedCoinL } from "../pages/Home/selector";

const stateSelector = createSelector(selectedCoinL, (coinlist) => ({
  coinlist,
}));

const Card = () => {
  const { coinlist } = useAppSelector(stateSelector);

  // console.log(coinlist);

  return <div>{coinlist && coinlist.map((teh) => teh.name)}</div>;
};

export default Card;
