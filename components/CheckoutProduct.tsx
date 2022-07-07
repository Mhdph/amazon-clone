import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { Products } from "../typings";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  category,
  title,
  description,
  image,
  price,
  rating,
  prime,
}: //   index,
Products) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      prime,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(null)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3 ">{description}</p>
        <Currency quantity={price} />
        {prime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt="Prime Delivery"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE One-Day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button ">
          Add To Basket
        </button>
        <button onClick={removeItemFromCart} className="button ">
          Remove From Basket
        </button>
      </div>
    </div>
  );
};
export default CheckoutProduct;
