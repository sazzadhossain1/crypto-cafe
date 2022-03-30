import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
      <Link to="/coins">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex-shrink-0">
            <img className="mx-auto object-cover rounded-full h-16 w-16" src={coin.image} alt="coinImg" />
          </div>
          <div className="flex flex-col justify-end">
            <small className="text-gray-600 font-medium">{coin.name}</small>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
