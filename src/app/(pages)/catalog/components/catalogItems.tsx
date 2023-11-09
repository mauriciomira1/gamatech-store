import Item from "./item";
import { prismaClient } from "@/lib/prisma";

const CatalogItems = async () => {
  const catalogItems = await prismaClient.category.findMany({});

  return (
    <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3 xl:max-w-6xl">
      {catalogItems.map((category) => (
        <Item category={category} key={category.name} />
      ))}
    </div>
  );
};

export default CatalogItems;
