import { Inter } from "next/font/google";
import { Product } from "@/models/Product";
import { HomeTemplate } from "@/ui-core";

import axiosInstance from "@/Services/api.service";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, isLoading, error }) {
  return (
    <>
      <div className="pt-24">
        <HomeTemplate
          products={products || []}
          loading={isLoading}
          error={error}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get("/products");
    const products: Product[] = response.data;

    const filteredProducts = products.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );

    return {
      props: {
        products: filteredProducts,
        isLoading: false,
        error: null,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
        isLoading: false,
        error: "Failed to fetch products",
      },
    };
  }
}
