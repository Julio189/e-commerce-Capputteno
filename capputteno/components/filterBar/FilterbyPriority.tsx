"use client";

import { useState } from "react";
import ArrowIcon from "../ArrowIcon";
import useFilter from "@/hooks/useFilter";
import { PriorityTypes } from "@/Types/PriorityTypes";
import FilterPriorityItem from "./FilterPriorityItem";

const FilterbyPriority = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <div className="z-10 flex items-center relative">
      <button
        onClick={handleIsOpen}
        className="text-darkColor leading-[22px] text-[12px] md:text-sm flex items-center justify-center gap-2"
      >
        Organizar por
        <ArrowIcon />
      </button>
      <div>
        {isOpen && (
          <ul className="px-4 py-3 absolute bg-white shadow-[0px_4px_12px] shadow-slate-200 rounded-[4px] right-0 top-[100%] w-[176px]">
            <FilterPriorityItem
              titulo="Novidades"
              onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}
            />
            <FilterPriorityItem
              titulo="Preco: Maior - menor"
              marginT
              onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}
            />
            <FilterPriorityItem
              titulo="Preço: Menor - maior"
              marginT
              onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}
            />
            <FilterPriorityItem
              titulo="Mais vendidos"
              marginT
              onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}
            />
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterbyPriority;
