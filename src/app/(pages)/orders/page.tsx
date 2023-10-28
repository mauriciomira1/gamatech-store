import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import Orderitem from "./components/orderItem";

export const dynamic = "force-dynamic";

const OrderPage = async () => {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Acess Denied!</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
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

      <div className="flex flex-col gap-4 py-4">
        {orders.map((order) => (
          <Orderitem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
