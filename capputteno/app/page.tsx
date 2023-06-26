

import ProductList from "@/components/ProductList";
import FilterBar from "@/components/filterBar/FilterBar";

export default function Home() {

  return (
      <main className="px-8 md:px-40 pt-[34px] flex flex-col items-center bg-bgPrimary h-screen">
        <FilterBar/>
        <ProductList/>
      </main>
  )
}
