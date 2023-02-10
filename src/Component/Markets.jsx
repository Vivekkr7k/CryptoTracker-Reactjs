import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Coins";
import Skleton from "./Skleton";

const Markets = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
        // console.log(data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return (
      <div className="wrapper-container ">
        <Skleton className="mt-10 h-8 w-32 " />
        <Skleton className="h-10" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
        <Skleton className="h-10 w-full mt-2" />
      </div>
    );
  }

  return (
    <div className="mt-8 text-2xl   ">
     
      <h1 className="text-center  text-3xl mt-20 mb-10 text-black ">
        {" "}
        Markets
      </h1>
      <div className="bg-gradient-to-r from-stone-500 to-zinc-900 rounded-lg shadow-2xl max-w-9xl m-auto mt-10 mb-10 ">
        {data && data.map((coin) => <Coins key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
};

export default Markets;
