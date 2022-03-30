import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return (

    <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 ">
        <p className="text-center text-3xl font-bold text-gray"> Available Crypto Curencies</p>
        <p className="text-center mb-12 m-4 text-xl font-normal text-gray-500">Total coins:{coins.length}</p>
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin}></CoinCard>
      ))}
    </div>
  );
};

export default Coins;
