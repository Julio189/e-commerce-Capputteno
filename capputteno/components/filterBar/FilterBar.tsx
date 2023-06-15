import FilterbyPriority from "./FilterbyPriority"
import FilterbyType from "./FilterbyType"


const FilterBar = () => {
  return (
    <div className="flex w-full items-start justify-between">
      <FilterbyType/>
      <FilterbyPriority/>
    </div>
  )
}

export default FilterBar


