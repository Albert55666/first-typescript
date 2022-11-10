import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "./type";

const initialState: IHomeState = {
  coinList: null,
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCoinList(state, action) {
      state.coinList = action.payload;
    },
  },
});

export const { setCoinList } = HomeSlice.actions;
export default HomeSlice.reducer;

// import {createSlice} from "@reduxjs/toolkit"
// import { IHomeState } from "./type"

// type CoinListFeatures = {
//     name: String | null;
//     image: String | null;
//     current_price: String | null;
//     market_cap: String | null;
//     market_cap_rank: String | null;
//     price_change_24h: String | null;
//     price_change_percentage_24h: String | null;
//     market_cap_change_percentage_24h: String | null;
//     sparkline_in_7d: [number] | null;
// }

// type InitialState = {
//     coinList: CoinListFeatures[] | null
// }

// const initialState = {
//     coinList: null
// } as InitialState;

// const HomeSlice = createSlice({
//     name: 'home',
//     initialState,
//     reducers:{

//     }
// })

// export const {} = HomeSlice.actions
// export default HomeSlice.reducer
