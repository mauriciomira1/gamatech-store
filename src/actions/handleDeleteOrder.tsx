"use server";
import { prismaClient } from "@/lib/prisma";

const handleDeleteOrder = async (orderId: string) => {
  if (!orderId) return;

  await prismaClient.orderProduct.deleteMany({
    where: {
      orderId,
    },
  });

  await prismaClient.order.delete({ where: { id: orderId } });
};

export default handleDeleteOrder;
