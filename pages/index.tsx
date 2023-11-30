import { Inter } from "next/font/google";
import { Product } from "@/models/Product";
import { HomeTemplate } from "@/ui-core";

import { getAllProducts } from "@/services/Product/product.service";
import { useQuery } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[], Error>({
    queryKey: "products",
    queryFn: getAllProducts,
  });

  return (
    <>
      <div className="pt-24">
        <HomeTemplate
          products={products || []}
          error={error}
          loading={isLoading}
        />
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   try {
//     const response = await axiosInstance.get("/products");
//     const products: Product[] = response.data;

//     const filteredProducts = products.filter(
//       (item) =>
//         item.category === "men's clothing" ||
//         item.category === "women's clothing"
//     );

//     return {
//       props: {
//         products: filteredProducts,
//         error: null,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return {
//       props: {
//         products: [],
//         error: "Failed to fetch products",
//       },
//     };
//   }
// }
