'use client';

import useFilter from "@/hooks/useFilter"
import CartControll from "../CartControll"
import SearchIcon from "../icons/SearchIcon"

function Input() {

  const handleChange = (event:any) => {
    setSearch(event.target.value)
  }

  const {search, setSearch} = useFilter()
  return (
    <div className="flex items-center justify-center gap-2 md:gap-6">
      <div className="relative flex items-center justify-between">
        <input type="text" 
        placeholder="Procurando por algo específico?"
        className="w-[230px] md:w-[280px] lg:w-[352px] h-[30px] md:h-[42px] bg-[#F3F5F6] rounded-[8px] px-4 py-[10px] text-darkColor text-[12px] md:text-[14px] leading-[22px] outline-none"
        value={search}
        onChange={handleChange}
        />
        <div className="absolute right-2 md:right-4 top-1 md:top-2 bottom-2">
          <SearchIcon/>
        </div>
      </div>
      <button>
        <CartControll/>
      </button>
    </div>
  )
}

export default Input
