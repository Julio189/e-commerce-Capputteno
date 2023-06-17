'use client';

import { useProducts } from "@/hooks/useProducts"
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { data } = useProducts()
    const products = data
  return (
    <div className="grid grid-cols-4 gap-8 mt-8 ">
      {products?.map(product => <ProductCard
        key={product.id}
        image={product.image_url}
        title={product.name}
        price={product.price_in_cents}
      />)}
      
    </div>
  )
}

export default ProductList
