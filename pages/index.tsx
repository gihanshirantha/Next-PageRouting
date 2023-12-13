import { Product } from "@/models/Product";
import { HomeTemplate } from "@/ui-core";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/Services/Product/product.service";
interface Props {
  products: Product[];
}

const Home: React.FC<Props> = ({ products }) => {
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
};
export default Home;

export async function getStaticProps() {
  const products = await getAllProducts();
  return { props: { products } };
}
