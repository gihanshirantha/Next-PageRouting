import { H1, ProductCard, Loading } from "../../components";
import { SectionLayout } from "../../layouts";
import { ProductProps } from "./Category.types";

const Categorytemplate: React.FC<ProductProps> = ({
  products,
  error,
  title,
}) => {
  return (
    <SectionLayout>
      <H1 title={title} />

      {error && <h3>{error.message}</h3>}

      <div
        className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-4 xl:grid-cols-4 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0"
      >
        {!error &&
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </SectionLayout>
  );
};

export default Categorytemplate;
