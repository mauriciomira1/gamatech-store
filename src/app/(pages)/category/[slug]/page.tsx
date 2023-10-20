import CardProduct from "@/components/ui/CardProduct";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    mouses: <MouseIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
  };

  const products = await prismaClient.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="flex w-full items-start py-7">
        <Badge
          className="gap-2 rounded-full border-2 border-primary px-4 py-[0.375rem] text-base font-bold uppercase"
          variant="outline"
        >
          {categoryIcon[params.slug as keyof typeof categoryIcon]}
          <p className="font-bold uppercase">{params.slug}</p>
        </Badge>
      </div>

      <div className="grid w-full grid-cols-2 gap-4">
        {products.map((product) => (
          <CardProduct product={product} key={product.slug} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
