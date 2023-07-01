import { ProductInCart } from "@/Types/Product"
import { formatPrice } from "@/utils/FormatPrice"
import { ChangeEvent } from "react"
import TrashIcon from "../icons/TrashIcon"

interface CartItemProps {
    product: ProductInCart,
    handleUpdateQuantity(id:string, quantity: number): void,
    handleDelete(id:string): void
}



const CartItem = ({product, handleUpdateQuantity, handleDelete}:CartItemProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }
  return (
    <li className="flex items-center justify-center h-[210px] rounded-lg bg-white">
        <img className="max-h-full rounded-tl-lg rounded-bl-lg"
        src={product.image_url} alt="Product Image" />
        <div className="py-4 px-6 flex flex-col items-start w-full h-full justify-between">
          <div className="flex justify-between w-full">
            <h4 className="text-textDark2 md:text-lg lg:text-xl font-light">
              {product.name}
            </h4>
            <button onClick={() => handleDelete(product.id)}>
              <TrashIcon/>
            </button>
          </div>
          <p className="text-xs font-normal text-textDark2 max-h-[50%] overflow-hidden">
            {product.description}
          </p>
          <div className="w-full flex justify-between items-center">
            <select className="p-2 border-[1.5px] rounded-lg border-[#A8A8B3] bg-[#f3f5f6] text-darkColor text-base font-normal" 
              value={product.quantity}
              onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p className="font-semibold text-base text[#09090a]">
              {formatPrice(product.price_in_cents)}
            </p>
          </div>
        </div>
    </li>
  )
}

export default CartItem
