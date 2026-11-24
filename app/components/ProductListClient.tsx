"use client";

import { Product } from "../types/product";

export default function ProductListClient({ initialProducts }: ProductListClientProps) { 
    return (
        <section>
            <ul>
{initialProducts.map((product) => (
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
    )
}
interface ProductListClientProps {
    initialProducts: Product[];
}
