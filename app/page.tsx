import { Product } from "./types/product";
import ProductListClient from "./components/ProductListClient";

export const revalidate = 60;

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products?limit=30");
  if (!response.ok) throw new Error("Error al cargar los productos");
  const data = await response.json();
  const products : Product[] = data.products;

  return (
    <main>
      <h1>Market Lens by Silvia Blanco</h1>
      <ProductListClient initialProducts={products} />
    </main>
  );
}
