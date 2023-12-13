import { Inter } from "next/font/google";
import { Product } from "@/models/Product";
import { HomeTemplate } from "@/ui-core";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../Services/Product/product.service";

export default function Home({ products }) {
  const { data, error, isLoading } = useQuery<Product[], Error>({
    queryKey: "products",
    queryFn: getAllProducts,
    initialData: products,
  });

  return (
    <>
      <div className="pt-24">
        <HomeTemplate products={data || []} error={error} loading={isLoading} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return { props: { products } };
}
