import React from "react";
import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
  // console.log(coin)
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="font-light mb-2 mt-8 p-2 pl-5  text-white rounded-full hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 ;">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{coin.score + 1}</span>
          <img className="w-7 ml-5" src={coin.small} alt="coin_image" />
          <p>{coin.name}</p>
          <small>({coin.symbol})</small>
        </div>
      </div>
    </Link>
  );
};

export default CoinTrending;
