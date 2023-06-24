'use client';

import ProductList from "@/components/ProductList";
import FilterBar from "@/components/filterBar/FilterBar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main className="px-8 md:px-40 pt-[34px] flex flex-col items-center bg-bgPrimary">
        <FilterBar/>
        <ProductList/>
      </main>
    </QueryClientProvider>
  )
}
