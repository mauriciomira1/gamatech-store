import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./categoriesItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3 px-5">
      {categories.map((category) => {
        return <CategoriesItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
