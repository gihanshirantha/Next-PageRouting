import axios from "axios";
import { Product } from "../../models/Product";

export async function getAllProducts() {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    const products: Product[] = res.data;

    const filteredProducts = products.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );

    return filteredProducts;
  } catch (err) {
    throw new Error("Faild to fetch Products");
  }
}

export async function getProductsInCategory(queryKey: any) {
  try {
    const category = queryKey;
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const products: Product[] = res.data;
    console.log(category);
    return products;
  } catch (err) {
    throw new Error("Faild to fetch Products in category");
  }
}

export async function getProductDetails(productId: string) {
  const product = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!product) return undefined;

  return product.data;
}
