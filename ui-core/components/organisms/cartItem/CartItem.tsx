import React, { useContext } from "react";
import { ItemCardProps } from "./CartItem.types";

import { CartContext } from "@/context/CartContext";
import { CartContextProps } from "@/context/CartContext.types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem: React.FC<ItemCardProps> = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(
    CartContext
  ) as CartContextProps;
  return (
    <>
      <div className="flexgap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-400">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
          <div>
            <img className="max-w-[80px]" src={image} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex justify-between  mb-2 gap-4 ">
              <div>
                <Link
                  href={`/products/${id}`}
                  className="text-xs uppercase font-medium max-w-[240px] text-primary hover:underline"
                >
                  {item.title}
                </Link>
              </div>
              <div
                onClick={() => removeFromCart(id)}
                className="text-xl cursor-pointer "
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <div className="flex gap-s-2 h-[36px] text-sm ">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 h-full flex justify-center hover:bg-primary-inverse items-center cursor-pointer px-2"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {item.amount}
                </div>
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center hover:bg-primary-inverse items-center cursor-pointer px-2"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <div className="flex-1 flex items-center justify-around">
                $ {price}
              </div>
              <div className="flex-1 flex justify-end items-center text-primary font-medium">
                $ {price * amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
