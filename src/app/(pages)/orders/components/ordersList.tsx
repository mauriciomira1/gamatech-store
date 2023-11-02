// Componente ainda não utilizado (a ideia é aplicá-lo à página de Order)
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
/* interface OrdersListProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
} */

const OrdersList = ({ orders }: any) => {
  const [newOrders, setNewOrders] = useState([]);
  useEffect(() => {}, [orders]);

  return (
    <div className="flex flex-col gap-4 py-4">
      {orders.map((currentOrder: any) => (
        <Orderitem key={currentOrder.order.id} order={currentOrder.order} />
      ))}
    </div>
  );
};

export default OrdersList;
