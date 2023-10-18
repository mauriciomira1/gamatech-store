import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";

interface CarouselItemProps {
  product: Product;
}

const CarouselItem = ({ product }: CarouselItemProps) => {
  return (
    <div className="w-[156px]">
      <div className="flex h-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[100px] w-auto max-w-[90%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </p>
        <div className="flex items-end gap-1">
          {product.discountPercentage > 0 ? (
            <>
              <p className="text-sm font-bold">
                {computeProductTotalPrice(product)}
              </p>
              <p className="text-xs line-through opacity-50">
                R$ {product.basePrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-bold">
              R$ {+product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
