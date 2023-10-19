import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="absolute left-2 top-2 flex rounded-full bg-[#5033C3] py-1 pl-2 pr-3">
              <ArrowDown size={14} />
              <span className="text-xs font-bold">
                {product.discountPercentage}%
              </span>
            </div>
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
                  R$ {computeProductTotalPrice(product)}
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
