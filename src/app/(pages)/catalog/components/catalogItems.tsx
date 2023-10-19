import Item from "./item";
import { prismaClient } from "@/lib/prisma";

const CatalogItems = async () => {
  const catalogItems = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-6">
      {catalogItems.map((category) => (
        <Item category={category} key={category.name} />
      ))}
    </div>
  );
};

export default CatalogItems;
