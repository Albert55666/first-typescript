import { useEffect } from "react";
import { Dispatch } from "redux";
import CoinService from "../../services/index";
import { setCoinList } from "./homeSlice";
import { coins } from "../../services/countryService/_generated_/fetchAnimeList";
import { useAppDispatch } from "../../hooks";

const actionDispatch = (dispatch: Dispatch) => ({
  setCoinList: (coin: coins[]) => dispatch(setCoinList(coin)),
});

const Home = () => {
  const { setCoinList } = actionDispatch(useAppDispatch());
  useEffect(() => {
    fetchCoin();
  });

  const fetchCoin = async () => {
    const coinListt = await CoinService.coin().catch((err) => {
      //     console.log(err);
    });
    // console.log("anime list", coinListt);
    if (coinListt) {
      setCoinList(coinListt);
    }
  };

  return <div>Coin List</div>;
};

export default Home;
