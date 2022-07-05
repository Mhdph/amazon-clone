import React, { useEffect, useState } from "react";
import { Products } from "../typings";
import Product from "./Product";

type ProductFeedProps = {
  products: Products[];
};
const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products
        .slice(0, 4)
        .map(({ id, category, title, description, image, price }) => (
          <Product
            key={id}
            id={id}
            category={category}
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg"
        alt=""
      />
      <div className="md:col-span-2 ">
        {products
          .slice(4, 5)
          .map(({ id, category, title, description, image, price }) => (
            <Product
              key={id}
              id={id}
              category={category}
              title={title}
              description={description}
              image={image}
              price={price}
            />
          ))}
      </div>{" "}
      {products
        .slice(5, products.length)
        .map(({ id, category, title, description, image, price }) => (
          <Product
            key={id}
            id={id}
            category={category}
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ))}
    </div>
  );
};
export default ProductFeed;
