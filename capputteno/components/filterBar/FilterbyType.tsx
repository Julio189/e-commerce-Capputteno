'use client';

import useFilter from "@/hooks/useFilter";
import FilterItem from "./FilterTypeItem";
import { FilterType } from "@/Types/FilterTypes";

const FilterbyType = () => {
  const { type, setType } = useFilter();
  
  const handleChanceType = (value: FilterType) => {
    setType(value);
  };

  return (
    <ul className="flex items-center justify-center gap-10">
      <FilterItem
        titulo="todos os produtos"
        select={type === FilterType.ALL}
        onClick={()=>handleChanceType(FilterType.ALL)}
      />
      <FilterItem
        titulo="camisetas"
        select={type === FilterType.SHIRT}
        onClick={()=>handleChanceType(FilterType.SHIRT)}
      />
      <FilterItem
        titulo="canecas"
        select={type === FilterType.MUG}
        onClick={()=>handleChanceType(FilterType.MUG)}
      />
    </ul>
  );
};

export default FilterbyType;
