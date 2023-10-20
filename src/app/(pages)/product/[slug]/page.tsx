import { prismaClient } from "@/lib/prisma";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ProductWithTotalPrice } from "@/helpers/product";

import CarouselPhotos from "./components/carouselPhotos";
import ProductDetails from "./components/productDetails";
import TitleCarousel from "../../../../components/ui/TitleCarousel";
import Carousel from "../../../../components/ui/Carousel";

const ProductDetailsPage = async ({ params }: any) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  const recommended = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!recommended) return null;

  return (
    product && (
      <div className="flex w-full flex-col items-center">
        <CarouselPhotos name={product?.name} imageUrls={product?.imageUrls} />
        <ProductDetails product={ProductWithTotalPrice(product)} />
        <div className="mt-10 flex w-full flex-col justify-start">
          <TitleCarousel title="Produtos Recomendados" />
          <Carousel products={recommended.category.products} />
        </div>
      </div>
    )
  );
};

export default ProductDetailsPage;
