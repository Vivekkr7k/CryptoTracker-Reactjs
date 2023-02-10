import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skleton from "./Skleton";


const CoinDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=true`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);

        //  console.log(data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return (
      <div>
        <div className="wrapper-container">
          <Skleton className="h-8 w-32" />
          <Skleton className="h-8" />
          <Skleton className="h-8 w-full mt-2" />
          <Skleton className="h-8 w-full mt-2" />
          <Skleton className="h-8 w-full mt-2" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="my-6">
        {data && (
          <div className="flex flex-col gap-2 items-center font-sans bg-gradient-to-r from-stone-500 to-zinc-900 rounded-lg shadow-2xl text-white p-10">
            <img src={data.image.small} alt={data.name} className=" " />
            <h1>{data.name}</h1>
            <p
              className="my-6 text-grey-500 [&>a]:text-blue-600 [&>a]:underline"
              dangerouslySetInnerHTML={{ __html: data.description.en }}
            ></p>
          </div>
        )}
      </div>
    </>
  );
};

export default CoinDetail;
