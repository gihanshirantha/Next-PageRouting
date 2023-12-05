import { getProductsInCategory } from "@/services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";

interface Props {}

const MensFashion: React.FC<Props> = ({ products }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "men's clothing"],
    queryFn: ({ queryKey }) => getProductsInCategory(queryKey[1]),
    initialData: products,
  });
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data || []}
        loading={isLoading}
        error={error}
        title="Mens Fashion"
      />
    </div>
  );
};

export default MensFashion;

export async function getStaticProps() {
  const products = await getProductsInCategory("men's clothing");
  return { props: { products } };
}
