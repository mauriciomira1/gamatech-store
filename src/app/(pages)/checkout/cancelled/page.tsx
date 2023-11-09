import { ArrowLeftIcon, CircleSlash } from "lucide-react";
import Link from "next/link";

const Cancelled = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-4">
      <CircleSlash size={40} color="red" />
      <p className="text-center text-xl font-bold">
        A sua compra não foi finalizada. Vamos tentar novamente?
      </p>
      <p className="px-4 pt-6 text-center text-xs font-extralight opacity-60">
        Está com dificuldades em finalizar o carrinho? Entre em contato conosco.
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

export default Cancelled;
