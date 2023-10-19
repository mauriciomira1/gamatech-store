"use client";
import { Button } from "@/components/ui/button";
import { TruckIcon } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex w-full flex-col items-center px-4 pt-7">
      <Button className="flex h-9 w-full">Adicionar ao carrinho</Button>
      <div className="mt-5 flex w-full items-center justify-between rounded-lg bg-accent px-4 py-3">
        <div className="flex items-center gap-3">
          <TruckIcon size={28} />
          <div className="flex flex-col gap-1">
            <p className="text-xs">
              Entrega via{" "}
              <span className="font-bold italic">FSPacket&#0174;</span>
            </p>
            <p className="text-[11px] text-primary">
              Envio para <span className="font-bold">todo o Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-[11px] font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default Cart;
