import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductCard from "./orderProductCard";
import { ProductWithTotalPrice } from "@/helpers/product";
import { useMemo } from "react";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const Orderitem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, current) => acc + Number(current.basePrice) * current.quantity,
      0,
    );
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, current) =>
        acc +
        ProductWithTotalPrice(current.product).totalPrice * current.quantity,

      0,
    );
  }, [order.orderProducts]);

  const totalDiscount = subtotal - total;

  return (
    <div>
      <Card className="px-4">
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value={order.id}>
            <AccordionTrigger>
              <div className="flex flex-col gap-1 text-left">
                <p className="text-sm font-bold uppercase">
                  Pedido com {order.orderProducts.length} produto(s)
                </p>
                <p className="text-xs opacity-50">
                  Compra de {format(order.createdAt, "dd/MM/y 'às' HH:mm")}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between">
                <div className="flex flex-col text-left">
                  <span className="font-bold">STATUS</span>

                  {order.status === "WAITING_FOR_PAYMENT" ? (
                    <span className="font-bold text-gray-600">Pendente</span>
                  ) : (
                    <span className="font-bold text-[#8162FF]">Pago</span>
                  )}
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-bold">DATA</span>
                  <span className="opacity-60">
                    {format(order.createdAt, "dd/MM/y")}
                  </span>
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-bold">PAGAMENTO</span>
                  <span className="opacity-60">Cartão</span>
                </div>
              </div>
              <hr className="my-5" />

              <div>
                {order.orderProducts.map((orderProduct) => (
                  <OrderProductCard
                    orderProduct={orderProduct}
                    key={orderProduct.id}
                  />
                ))}
              </div>
              <div className="pt-5">
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span>Entrega</span>
                  <span>GRÁTIS</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span>Descontos</span>
                  <span>- R$ {totalDiscount.toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-base font-bold">
                  <span className="">Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default Orderitem;
