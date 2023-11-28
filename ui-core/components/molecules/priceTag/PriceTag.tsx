import React from "react";
import { PriceProps } from "./PriceTag.types";
import { H1 } from "../../atoms";

const PriceTag: React.FC<PriceProps> = ({ category, price }) => {
  return (
    <>
      <div
        className={`text-center rounded-3xl p-3  mt-4 ${
          category === "men's clothing" ? "bg-primary" : "bg-secondary"
        }`}
      >
        <H1 title={`$ ${price}`} />
      </div>
    </>
  );
};

export default PriceTag;
