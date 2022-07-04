import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            className="cursor-pointer"
            width={150}
            height={40}
            objectFit="contain"
            src="https://links.papareact.com/f90"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Mahdi Parivsh</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="flex relative link items-center">
            <ShoppingCartIcon className="h-10" />
            <span className="absolute bg-yellow-400 top-0 right-0 md:right-10 h-4 w-4 text-center rounded-full text-black font-bold">
              4
            </span>
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* BottomNav */}
      <div></div>
    </header>
  );
};
export default Header;
