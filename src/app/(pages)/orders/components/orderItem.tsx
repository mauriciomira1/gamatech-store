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
  return (
    <div>
      <Card className="px-4">
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value={order.id}>
            <AccordionTrigger>
              <div className="flex flex-col gap-1 text-left">
                Pedido com {order.orderProducts.length} produto(s)
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between">
                <div className="flex flex-col text-left">
                  <span className="font-bold">STATUS</span>
                  <span className="font-bold text-[#8162FF]">
                    {order.status}
                  </span>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default Orderitem;
