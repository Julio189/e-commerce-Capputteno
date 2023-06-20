import { formatPrice } from "@/utils/FormatPrice";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {

   

    const priceFormated = formatPrice(price)

  return (
    <div className="flex flex-col w-[256px] items-center justify-center backdrop-blur-[10px] bg-[#ffffff66] rounded">
      <img
        src={image}
        alt="Imagem do Produto"
        className="w-[256px] h-[300px] rounded"
      />
      <div className="flex flex-col w-[256px] items-start justify-center py-2 px-3">
      <h3 className="leading-[24px] text-textDark2 text-base font-light">
            {title}
        </h3>
        <div className="w-[228px] h-[1px] bg-[#DCE2E5] my-2"></div>
        <p className="text-[#09090A] font-semibold leading-[21px] text-sm">
            {priceFormated}
        </p>
      </div>
        
    </div>
  );
};

export default ProductCard;
