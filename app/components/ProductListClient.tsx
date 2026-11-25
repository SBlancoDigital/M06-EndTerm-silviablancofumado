"use client";

import { Product } from "../types/product";
import { useMemo, useState } from "react";

interface ProductListClientProps {
  initialProducts: Product[];
}

export default function ProductListClient({
  initialProducts,
}: ProductListClientProps) {
  // creo un estado products, con su funcion para cambiarlo setProducts
  // del tipo Product[] que empieza valiendo initialProducts
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const text = search.toLowerCase().trim();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(text) &&
        (category === "" || product.category === category),
    );
  }, [search, products, category]);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))].sort(),
    [products],
  );

  return (
    <section>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCategory("")}>
        {" "}
        Todas las categorías
      </button>

      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button onClick={() => setCategory(cat)}>{cat}</button>
          </li>
        ))}
      </ul>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <img src={product.thumbnail} alt={product.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
