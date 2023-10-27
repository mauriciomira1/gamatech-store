import { ProductWithTotalPrice } from "@/helpers/product";
import { OrderProduct, Prisma, Product } from "@prisma/client";
import Image from "next/image";

interface OrderProductCardProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductCard = ({ orderProduct }: OrderProductCardProps) => {
  return (
    <div className="flex w-full gap-3 py-4">
      <div className="flex h-[90px] w-1/4 items-center justify-center rounded-xl bg-secondary">
        <Image
          src={orderProduct.product.imageUrls[0]}
          alt={orderProduct.product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="bject-contain h-auto max-h-[80%] w-auto max-w-[80%]"
        />
      </div>
      <div className="flex w-3/4 flex-col gap-2">
        <span className="rounded-lg bg-secondary px-3 py-1 text-center text-xs font-thin">
          Vendido e entregue por <span className="font-bold">GT Store</span>
        </span>
        <span>{orderProduct.product.name}</span>
        <div className="flex w-full items-baseline justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold">
              R${" "}
              {ProductWithTotalPrice(orderProduct.product).totalPrice.toFixed(
                2,
              )}
            </span>
            <span className="text-sm line-through opacity-60">
              R$ {Number(orderProduct.product.basePrice)}
            </span>
          </div>
          <span>Qtd: {orderProduct.quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderProductCard;
