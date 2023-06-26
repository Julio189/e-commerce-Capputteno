'use client';

import { useProducts } from "@/hooks/useProducts"
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { data } = useProducts()
    const products = data
  return (
    <div className="flex gap-8 mt-8 flex-wrap">
      {products?.map(product => <ProductCard
        key={product.id}
        image={product.image_url}
        title={product.name}
        price={product.price_in_cents}
        id={product.id}
      />)}
      
    </div>
  )
}

export default ProductList
