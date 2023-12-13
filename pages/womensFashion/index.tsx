import { getProductsInCategory } from "@/Services/Product/product.service";
import { Categorytemplate } from "@/ui-core";
import { useQuery } from "@tanstack/react-query";

interface Props {}

const MensFashion: React.FC<Props> = ({ products }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", "women's clothing"],
    queryFn: ({ queryKey }) => getProductsInCategory(queryKey[1]),
    initialData: products,
  });
  return (
    <div className="pt-24">
      <Categorytemplate
        products={data || []}
        error={error}
        loading={isLoading}
        title="women's Fashion"
      />
    </div>
  );
};

export default MensFashion;

export async function getStaticProps() {
  const products = await getProductsInCategory("women's clothing");
  return { props: { products } };
}
