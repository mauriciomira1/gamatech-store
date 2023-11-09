import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  category: Category;
}

const Item = ({ category }: ItemProps) => {
  return (
    <Link
      className="flex flex-col items-center"
      href={`/category/${category.slug}`}
    >
      <div className="flex h-36 w-full items-center justify-center rounded-t-lg bg-gradient-to-tr from-[#5033C3] to-secondary">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src={category.imageUrl}
          alt={category.name}
          className="h-5/6 max-h-full w-auto max-[540px]:h-auto max-[540px]:w-3/5"
        />
      </div>
      <div className="flex h-11 w-full items-center justify-center rounded-b-lg bg-secondary text-sm font-bold">
        {category.name}
      </div>
    </Link>
  );
};

export default Item;
