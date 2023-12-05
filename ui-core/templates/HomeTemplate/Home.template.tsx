import { H1, ProductCard, Loading, Category, H3 } from "../../components";
import { SectionLayout } from "../../layouts";

import { ProductProps } from "./HomeTemplate.types";

const HomeTemplate: React.FC<ProductProps> = ({ products, loading, error }) => {
  return (
    <>
      <SectionLayout>
        <div className="pb-4">
          <H1 title="Flash Sale" />
        </div>
        {loading && <Loading />}
        {error && <h3>{error.message}</h3>}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]
               max-w-sm mx-auto md:max-w-none md:mx-0"
        >
          {!loading &&
            !error &&
            products?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </SectionLayout>
      <SectionLayout>
        <H1 title="Categories" />

        <div
          className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[30px]
max-w-sm mx-auto md:max-w-none md:mx-0"
        >
          <Category title="Mens Clothing" link="/mensFashion" />
          <Category title="Womens Clothing" link="/womensFashion" />
        </div>
      </SectionLayout>
    </>
  );
};
export default HomeTemplate;
