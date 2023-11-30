import { getProductsInCategory } from "@/services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";

interface Props {}

const MensFashion: React.FC<Props> = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", "men's clothing"],
    queryFn: ({ queryKey }) => getProductsInCategory(queryKey[1]),
  });
  return (
    <div className="pt-24">
      <Categorytemplate
        products={products || []}
        loading={isLoading}
        error={error}
        title="Mens Fashion"
      />
    </div>
  );
};

export default MensFashion;

// export async function getServerSideProps() {
//   try {
//     const res = await axiosInstance.get(`/products/category/men's clothing`);
//     const products: Product[] = res.data;

//     return {
//       props: {
//         products: products,
//         isLoading: false,
//         error: null,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return {
//       props: {
//         products: [],
//         isLoading: false,
//         error: "Failed to fetch products",
//       },
//     };
//   }
// }
