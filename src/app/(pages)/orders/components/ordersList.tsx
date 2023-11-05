"use client";
import React, { useEffect, useState } from "react";
import Orderitem from "./orderItem";
import { Prisma } from "@prisma/client";

interface OrdersListProps {
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

const OrdersList = ({ orders }: { orders: any }) => {
  const [currentOrders, setCurrentOrders] = useState(orders);
  useEffect(() => {
    setCurrentOrders(orders);
  }, [orders]);

  return (
    <div className="flex flex-col gap-4 py-4">
      {currentOrders.map((currentOrder: any) => (
        <Orderitem key={currentOrder.order.id} order={currentOrder.order} />
      ))}
    </div>
  );
};

export default OrdersList;
