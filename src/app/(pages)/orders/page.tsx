import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Orderitem from "./components/orderItem";
import OrdersList from "./components/ordersList";

export const dynamic = "force-dynamic";

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
    );
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="p-5">
      <Badge
        className="gap-2 rounded-full border-2 border-primary px-4 py-[0.375rem] text-base font-bold uppercase"
        variant="outline"
      >
        <PackageSearchIcon />
        <p className="font-bold uppercase">Meus pedidos</p>
      </Badge>

      {/* <div className="flex flex-col gap-4 py-4">
        {orders.map((order) => (
          <Orderitem key={order.id} order={order} />
        ))}
      </div> */}
      <OrdersList orders={orders} />
    </div>
  );
};

export default OrderPage;
