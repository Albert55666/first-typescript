import { gql } from "@apollo/client";

export const FETCH_COIN_LIST = gql`
  {
    coins {
      name
      image
      current_price
      market_cap
    }
  }
`;
