import React from "react";
import { Down, Up } from "../icons/icons";

import { Link } from "react-router-dom";

const Coins = ({ coin }) => {
  // console.log(coin);
  return (
    <>
      <Link to={`/coin/${coin.id}`}>
        <div className="grid grid-cols-3 md:grid-cols-7 font-light  hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full text-white pl-10  pr-10 pt-5 ml-10 mr-10">
          <div className="flex item-center w-full h-5  text-base ">
            <img src={coin.image} alt={coin.name} />
            <p className="ml-2">{coin.name}</p>
            <span className="text-xs">({coin.symbol})</span>
          </div>

          <div className="hidden sm:block text-base ">
            <p className="font-semibold ">Market Rank</p>
            <span className="text-center">{coin.market_cap_rank}</span>
          </div>

          <div>
            <p className="font-semibold text-base ">Price</p>
            <span className="text-base">
            ₹{coin.current_price}
            </span>
          </div>

          <span
            className={`flex ${
              coin.price_change_percentage_24h < 0
                ? "text-red-400"
                : "text-green-400"
            } text-base`}
          >
            {coin.price_change_percentage_24h < 0 ? <Down /> : <Up />}
            {coin.price_change_percentage_24h}
          </span>

          <div className="hidden sm:block text-base ">
            <p className="font-semibold ">Market Cap</p>
            <span>{`₹${coin.market_cap}`}</span>
          </div>

          <div className="hidden sm:block text-base ">
            <p className="font-semibold ">High 24h</p>
            <span>{`₹${coin.high_24h}`}</span>
          </div>

          <div className="hidden sm:block text-base ">
            <p className="font-semibold ">Low 24h</p>
            <span>{`₹${coin.low_24h}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Coins;
