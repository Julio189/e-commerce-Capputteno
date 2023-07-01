"use client";

import { ProductInCart } from "@/Types/Product";
import BackButton from "@/components/BackButton"
import CartItem from "@/components/cart/CartItem";
import useLocalStorage from "@/hooks/useLocalStorage"
import { formatPrice } from "@/utils/FormatPrice";


const CartPage = () => {

    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", []);

    const calculateTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => (sum += item.price_in_cents * item.quantity), 0)

    }

    const cartTotal = formatPrice(calculateTotal(value)
    ) 
    const cartTotalWidthDelivery = formatPrice(calculateTotal(value)+4000)

    const handleUpdateQuantity = (id: string, quantity:number) => {
        const newValue = value.map( item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity}
        })

        updateLocalStorage(newValue)
    }

    const handleDelete = (id: string) => {
        const newValue = value.filter( item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

  return (
    <section className="flex flex-col lg:flex-row bg-bgPrimary px-40 pb-[50px] pt-[25px] min-h-screen justify-between gap-8">
        <div className="flex flex-col">
            <BackButton navigation="/"/>
            <h2 className="mt-[26px] uppercase text-textDark2 text-2xl font-medium">
                Seu Carrinho
            </h2>
            <p className="text-base text-textDark2 mb-6">
                Total { value.length } Produtos <span className="font-semibold">{cartTotal}</span>
            </p>

            <ul className="flex flex-col items-center justify-center gap-4">
                {value.map(item => <CartItem
                key={item.id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDelete}
                />)}
            </ul>
        </div>
        <div className="flex flex-col items-start bg-white min-h-full min-w-[352px] py-4 px-6">
            <h3 className="uppercase font-semibold text-xl text-textDark2 mb-[30px]">
                Resumo do pedido
            </h3>
            <div className="flex justify-between w-full mb-3 text-base">
                <p>
                    Subtotal de produtos
                </p>
                <p>{cartTotal}</p>
            </div>
            <div className="flex items-center justify-between w-full mb-6">
                <p>Entrega</p>
                <p>{formatPrice(4000)}</p>
            </div>
            <div className="w-full h-[1px] bg-[#DCE2E5] my-2"></div>
            <div className="flex items-center justify-between w-full font-semibold mt-2">
                <p>Total</p>
                <p>{cartTotalWidthDelivery}</p>
            </div>
            <button className="uppercase text-white bg-[#51B853] rounded-[4px] p-3 w-full mt-10">
                finalizar a compra
            </button>
        </div>
    </section>
  )
}

export default CartPage
