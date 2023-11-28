import { Product } from "@/models/Product";
import { Categorytemplate } from "@/ui-core";

interface Props {}

const MensFashion: React.FC<Props> = ({ products }) => {
  return (
    <div className="pt-24">
      <Categorytemplate
        products={products || []}
        loading={false}
        error={null}
        title="Mens Fashion"
      />
    </div>
  );
};

export default MensFashion;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/men's clothing`
    );
    const products: Product[] = await res.json();

    return {
      props: {
        products: products,
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
