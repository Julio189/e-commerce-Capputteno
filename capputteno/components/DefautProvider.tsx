'use client';

import FilterContextProvider from "@/contexts/FilterContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

interface DefautProviderProps {
    children: ReactNode
}

const DefautProvider = ({children}:DefautProviderProps) => {
    const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        <FilterContextProvider>
            {children}
        </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default DefautProvider
