import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./categoriesItem";
import Link from "next/link";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-3 px-5 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-4 md:py-10">
      {categories.map((category) => {
        return (
          <Link href={`/category/${category.slug}`} key={category.id}>
            <CategoriesItem category={category} />
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
