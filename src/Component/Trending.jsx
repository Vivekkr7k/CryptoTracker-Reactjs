import React, { useEffect, useState } from "react";

import axios from "axios";
import CoinTrending from "./CoinTrending";
import Skleton from "./Skleton";

const Trending = () => {
  const [data, setData] = useState(null);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return (
      <div className="wrapper-container ">
        <Skleton className="h-8 w-32 items-center" />
        <Skleton className="h-10" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-8 w-full mt-2" />
        <Skleton className="h-8 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-8 w-full mt-2" />
      </div>
    );
  }

  return (
    <div className="mt-0  ">
      <h1 className="text-3xl   text-center   text-white-400 	 pt-10">
        Trending
      </h1>
      <div className="bg-gradient-to-r from-stone-500 to-zinc-900 rounded-lg shadow-2xl max-w-5xl m-auto mt-10 mb-10 ">
        {data &&
          data.coins.map((coin) => (
            <CoinTrending key={coin.item.coin_id} coin={coin.item} />
          ))}
      </div>
    </div>
  );
};

export default Trending;
