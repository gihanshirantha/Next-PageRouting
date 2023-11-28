import { Product } from "@/models/Product";

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();
  
    //filter only fashion products
    const filterProducts = products.filter((item) => {
      return (
        item.category === "men's clothing" || item.category === "women's clothing"
      );
    });
    console.log(products);
    return {
      props: {
        product: filterProducts,
      },
    };
  }
  