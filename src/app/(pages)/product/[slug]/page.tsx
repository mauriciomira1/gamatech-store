import { prismaClient } from "@/lib/prisma";
import CarouselPhotos from "./components/carouselPhotos";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const ProductDetailsPage = async ({ params }: Params) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  return (
    product && (
      <div>
        <CarouselPhotos name={product?.name} imageUrls={product?.imageUrls} />
      </div>
    )
  );
};

export default ProductDetailsPage;
