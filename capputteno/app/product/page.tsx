'use client';

import BackButton from "@/components/BackButton";
import CartIcon from "@/components/icons/CartIcon";
import ShopBag from "@/components/icons/ShopBag";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/FormatPrice";


const Product = ({ searchParams }:{searchParams:{ id:string }}) => {
  const { data } = useProduct(searchParams.id)
  console.log(data)
  return (
    <section className="bg-bgPrimary px-40 pb-[50px] pt-[25px] flex flex-col">
     <BackButton navigation="/"/>
      <div className="flex mt-[22px] w-full gap-8">
        <img className="max-w-[640px] w-[50%] rounded" 
        src={data?.image_url}/>
        <div className="flex flex-col relative">
          <h3 className="text-base text-textDark2 mb-3">{data?.category}</h3>
          <h3 className="text-textDark2 text-[32px] uppercase">{data?.name}</h3>
          <h3 className="font-semibold text-xl mb-6">{formatPrice(data?.price_in_cents ?? 0)}</h3>
          <span className="text-textDark2 text-xs mb-[40px]">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</span>
          <div>
            <h3 className="text-base text-darkColor mb-2">Descrição</h3>
            <span className="text-sm text-textDark2">{data?.description}</span>
          </div>
          <button className="bg-[#115D8C] text-white h-[44px] uppercase flex items-center justify-center gap-3 absolute bottom-0 w-full rounded">
            <ShopBag/>
            <h2>Adiconar ao carrinho</h2>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
