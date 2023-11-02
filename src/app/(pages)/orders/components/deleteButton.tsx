"use client";
import handleDeleteOrder from "@/actions/handleDeleteOrder";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface DeleteButtonProps {
  orderId: string;
}

/* const DeleteButton = ({ deleteOrder }: DeleteButtonProps) => { */
const DeleteButton = ({ orderId }: DeleteButtonProps) => {
  const deleteOrder = async () => {
    await handleDeleteOrder(orderId);
  };

  return (
    <Button
      className="h-18 rounded-mdpx-2 mt-4 py-1.5 font-bold uppercase"
      onClick={deleteOrder}
    >
      Excluir pedido
    </Button>
  );
};

export default DeleteButton;
