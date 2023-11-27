// pages/products/[product].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Product } from "../models/Product";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div>
      <h1 className="text-2xl ">{product.title}</h1>
      <p className="w-96">{product.description}</p>
      <img src={product.image} alt="" className="w-64" />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const paths = products.map((product) => ({
    params: { product: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.product}`
  );
  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
