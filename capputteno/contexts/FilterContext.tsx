'use client';

import { FilterType } from "@/Types/FilterTypes";
import { PriorityTypes } from "@/Types/PriorityTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.POPULARITY,
    setPriority: (value:PriorityTypes) => {},
    setSearch: (value:string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {}
}) 

interface ProviderProps {
  children: ReactNode
}

const FilterContextProvider = ({children}: ProviderProps) => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.NEWS)

  return (
    <FilterContext.Provider value={{search, page, type, priority,setSearch, setPage, setType, setPriority}}>
      {children}
    </FilterContext.Provider>
  )
}
export default FilterContextProvider


