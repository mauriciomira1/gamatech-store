"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discountBadge";

import { ComputeProductTotalPriceProps } from "@/helpers/product";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useState } from "react";

interface ProductDetailsProps {
  product: Pick<
    ComputeProductTotalPriceProps,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductDetails = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subtractQuantity = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-0.5 px-4 pt-6">
      <span className="text-xs opacity-40">Novo | 106 vendidos</span>
      <h1 className="text-lg">{name}</h1>
      <p className="text-xs text-primary">Disponível em estoque</p>
      <div className="flex flex-col pt-4">
        <div className="flex gap-2">
          <h2 className="text-2xl font-bold">
            R$ {Number(totalPrice).toFixed(2)}
          </h2>
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        </div>
        <p className="line-through opacity-50">
          R$ {Number(basePrice).toFixed(2)}
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
        {description}
      </p>
    </div>
  );
};

export default ProductDetails;
