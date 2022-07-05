import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Products } from "../typings";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  id,
  category,
  title,
  description,
  image,
  price,
}: Products) => {
  const [rating, setRating] = useState<number>(0);
  const [prime, setPrime] = useState<boolean>(false);
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setPrime(Math.random() < 0.5);
  }, [rating]);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {prime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            loading="lazy"
            src="https://links.papareact.com/fdw"
            alt="Prime Delivery"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE One-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
};
export default Product;
