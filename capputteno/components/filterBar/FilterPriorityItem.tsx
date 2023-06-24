interface FilterPriorityItemProps {
    titulo: string,
    marginT?: boolean,
    onClick:()=> void
}

const FilterPriorityItem = ({titulo, marginT, onClick}: FilterPriorityItemProps) => {
  return (
    <li className={`cursor-pointer text-[12px] md:text-sm font-normal text-darkColor leading-[22px] ${marginT ? 'mt-1' : 'mt-0'}`}
    onClick={onClick}>
      {titulo}
    </li>
  )
}

export default FilterPriorityItem
