import {
  ComputeProductTotalPriceProps,
  computeProductTotalPrice,
} from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discountBadge";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="relative w-full min-w-[156px] ">
        <div className="flex h-[170px] w-full min-w-[156px] items-center justify-center rounded-lg bg-accent">
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
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-2 top-2">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        <div className="mt-2 flex flex-col gap-0.5">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {product.name}
          </p>
          <div className="flex items-end gap-1">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text-sm font-bold">
                  R$ {computeProductTotalPrice(product).totalPrice}
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
    </Link>
  );
};

export default CardProduct;
