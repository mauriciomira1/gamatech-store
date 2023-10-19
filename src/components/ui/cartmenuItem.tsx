import { CartContext, CartProduct } from "@/providers/cart";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import { useContext } from "react";

interface CartmenuItemProps {
  product: CartProduct;
}

const CartmenuItem = ({ product }: CartmenuItemProps) => {
  const { addOne, decreaseOne } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-2">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "contain" }}
            className="h-auto max-h-[70%] w-full max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-end gap-1">
            <p className="text-sm font-bold">
              R$ {Number(product.totalPrice).toFixed(2)}
            </p>
            <p className="text-xs line-through opacity-60">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-3 py-1 text-sm">
            <Button
              variant="outline"
              className="h-auto px-1.5 py-1.5"
              onClick={() => decreaseOne(product)}
            >
              <ChevronLeft size={16} />
            </Button>
            <p className="text-sm">{product.quantity}</p>
            <Button
              variant="outline"
              className="h-auto px-1.5 py-1.5"
              onClick={() => addOne(product)}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <TrashIcon />
      </div>
    </div>
  );
};

export default CartmenuItem;
