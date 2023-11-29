import axiosInstance from "@/Services/api.service";
import { Product } from "@/models/Product";
import { Categorytemplate } from "@/ui-core";

interface Props {}

const MensFashion: React.FC<Props> = ({ products, isLoading, error }) => {
  return (
    <div className="pt-24">
      <Categorytemplate
        products={products || []}
        loading={isLoading}
        error={error}
        title="women's Fashion"
      />
    </div>
  );
};

export default MensFashion;

export async function getServerSideProps() {
  try {
    const res = await axiosInstance.get(`/products/category/women's clothing`);
    const products: Product[] = res.data;

    return {
      props: {
        products: products,
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
