import { coins } from "./countryService/_generated_/fetchAnimeList";
import { client } from "../graphql/index";
import { FETCH_COIN_LIST } from "./queries";

class CoinService {
  // console.log("nh");

  async coin(): Promise<coins[]> {
    try {
      const response = await client.query({
        query: FETCH_COIN_LIST,
      });

      if (!response || !response.data) {
        throw new Error("something's wrong");
      }
      // console.log(response);
      return response.data.coins;
    } catch (error) {
      throw error;
    }
  }
}

export default new CoinService();
