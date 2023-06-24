'use client';


interface FilterItemsProps {
    select: boolean;
    titulo:string;
    onClick:() => void;
}

const FilterTypeItem = ({select, titulo, onClick}:FilterItemsProps) => {
  return (
    <li className={`text-darkColor text-[12px] md:text-base md:leading-[22px] uppercase cursor-pointer ${select ? 'border-b-2 md:border-b-4 border-b-[#FFA585] font-semibold':'border-none font-normal'}`} onClick={onClick}>
      {titulo}
    </li>
  )
}

export default FilterTypeItem
