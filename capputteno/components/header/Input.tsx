
import CartControll from "../CartControll"
import SearchIcon from "../icons/SearchIcon"

function Input() {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="relative flex items-center justify-between">
        <input type="text" 
        placeholder="Procurando por algo específico?"
        className="w-[352px] h-[42px] bg-[#F3F5F6] rounded-[8px] px-4 py-[10px] text-darkColor text-[14px] leading-[22px] outline-none"/>
        <div className="absolute right-4 top-2 bottom-2">
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
