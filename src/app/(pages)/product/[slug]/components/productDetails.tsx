"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discountBadge";

import { ComputeProductTotalPriceProps } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ChevronLeft, ChevronRight, TruckIcon } from "lucide-react";

import { useContext, useState } from "react";

interface ProductDetailsProps {
  product: ComputeProductTotalPriceProps;
}

interface ProductWithQuantityProps extends ComputeProductTotalPriceProps {
  quantity: number;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subtractQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const addProductToCart = (product: ProductWithQuantityProps) => {
    return addToCart(product);
  };

  return (
    <>
      <div className="flex flex-col gap-0.5 px-4 pt-6">
        <span className="text-xs opacity-40">Novo | 106 vendidos</span>
        <h1 className="text-lg">{product.name}</h1>
        <p className="text-xs text-primary">Disponível em estoque</p>
        <div className="flex flex-col pt-4">
          <div className="flex gap-2">
            <h2 className="text-2xl font-bold">
              R$ {Number(product.totalPrice).toFixed(2)}
            </h2>
            <DiscountBadge>{product.discountPercentage}</DiscountBadge>
          </div>
          <p className="line-through opacity-50">
            R$ {Number(product.basePrice).toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-3 py-4 text-sm">
          <Button
            variant="outline"
            className="h-auto px-1.5 py-1.5"
            onClick={subtractQuantity}
          >
            <ChevronLeft size={16} />
          </Button>
          <p>{quantity}</p>
          <Button
            variant="outline"
            className="h-auto px-1.5 py-1.5"
            onClick={addQuantity}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
        <h3 className="pt-4 text-sm font-bold">Descrição</h3>
        <p className="text-justify align-baseline text-xs font-light opacity-50">
          {product.description}
        </p>
      </div>
      <div className="flex w-full flex-col items-center px-4 pt-7">
        <Button
          className="flex h-9 w-full"
          onClick={() => addProductToCart({ ...product, quantity })}
        >
          Adicionar ao carrinho
        </Button>
        <div className="mt-5 flex w-full items-center justify-between rounded-lg bg-accent px-4 py-3">
          <div className="flex items-center gap-3">
            <TruckIcon size={28} />
            <div className="flex flex-col gap-1">
              <p className="text-xs">
                Entrega via{" "}
                <span className="font-bold italic">FSPacket&#0174;</span>
              </p>
              <p className="text-[11px] text-primary">
                Envio para <span className="font-bold">todo o Brasil</span>
              </p>
            </div>
          </div>
          <p className="text-[11px] font-bold">Frete Grátis</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
