import { ArrowLeftIcon, BadgeCheckIcon } from "lucide-react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
      <BadgeCheckIcon size={40} color="green" />
      <p className="text-xl font-bold">Compra finalizada com sucesso!</p>
      <p className="px-4 pt-6 text-center text-sm font-extralight opacity-60">
        Obrigado por escolher a GamaTech Store. Esperamos que você tenha tido
        uma ótima experiência.
      </p>
      <Link
        href="/"
        className="mt-3 flex items-center justify-center gap-2 rounded bg-primary px-3 py-1.5 hover:bg-purple-700"
      >
        Voltar para Início <ArrowLeftIcon />
      </Link>
    </div>
  );
};

export default Success;
