import { ProductCardProps } from "./ProductCard.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/Card.component";

import { Button } from "../../atoms/button/Button.component";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CartContextProps } from "../../../../context/CartContext.types";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext) as CartContextProps;

  const { id, image, description, title, price, category } = product;
  return (
    <Card>
      <CardHeader>
        <Link href={`/products/${id}`}>
          <CardTitle className="h-14">{title}</CardTitle>
        </Link>
        <div className=" h-[190px] group transition justify-center flex items-center">
          <img
            src={image}
            alt=""
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
          />
        </div>
      </CardHeader>

      <CardContent
        className={`text-center rounded-3xl p-4 ${
          category === "men's clothing" ? "bg-mens" : "bg-womens"
        }`}
      >
        <div className="font-bold text-2xl text-[#0E42FD]">$ {price}</div>
        <CardDescription>{description}</CardDescription>
        <Button
          size={"sm"}
          className="mt-2"
          onClick={() => addToCart(product, id)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
