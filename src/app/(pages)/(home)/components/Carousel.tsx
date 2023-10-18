import React from "react";
import CarouselItem from "./carouselItem";
import { Product } from "@prisma/client";

interface CarouselProps {
  products: Product[];
}

const Carousel = ({ products }: CarouselProps) => {
  return (
    <div className="flex w-full gap-3 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <CarouselItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Carousel;
