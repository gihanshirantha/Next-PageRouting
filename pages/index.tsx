import { Inter } from "next/font/google";
import { Product } from "@/models/Product";
import { HomeTemplate } from "@/ui-core";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <div className="pt-24">
        <HomeTemplate products={products || []} loading={false} error={null} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();

    const filteredProducts = products.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );

    return {
      props: {
        products: filteredProducts,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
