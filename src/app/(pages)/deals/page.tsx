import { prismaClient } from "@/lib/prisma";
import { ProductWithTotalPrice } from "@/helpers/product";
import CardProduct from "@/components/ui/CardProduct";
import { Badge } from "@/components/ui/badge";
import { PercentIcon } from "lucide-react";

const Deals = async () => {
  const dealsProducts = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="px-4">
      <div className="flex w-full items-start py-5">
        <Badge
          className="gap-2 rounded-full border-2 border-primary px-4 py-[0.375rem] text-base font-bold uppercase"
          variant="outline"
        >
          <PercentIcon />
          <p className="font-bold uppercase">Ofertas</p>
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
        {dealsProducts.map((deal) => (
          <CardProduct product={ProductWithTotalPrice(deal)} key={deal.id} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
