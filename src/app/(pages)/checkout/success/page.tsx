import { BadgeCheckIcon } from "lucide-react";

const Success = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
      <BadgeCheckIcon size={40} color="green" />
      <p className="text-xl font-bold">Compra finalizada com sucesso!</p>
      <p className="px-4 pt-6 text-center text-sm font-extralight opacity-60">
        Obrigado por escolher a GamaTech Store. Esperamos que você tenha tido
        uma ótima experiência.
      </p>
    </div>
  );
};

export default Success;
