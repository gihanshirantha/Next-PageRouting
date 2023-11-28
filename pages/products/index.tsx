import Link from "next/link";
import React from "react";
import { Product } from "../../models/Product";

const index = ({ product }) => {
  return (
    <div className="px-10">
      {product.map((products) => (
        <Link href={`/products/${products.id}`}>
          <h1 className="border px-4 py-2 mt-6 rounded-xl shadow-md">
            {products.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  //filter only fashion products
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return {
    props: {
      product: filterProducts,
    },
  };
}
