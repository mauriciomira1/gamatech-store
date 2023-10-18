import { prismaClient } from "@/lib/prisma";
import Banner from "./components/banner";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import TitleCarousel from "./components/TitleCarousel";

export default async function Home() {
  const dealsProducts = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      slug: "keyboards",
    },
  });

  return (
    <div className="flex w-full flex-col gap-7">
      <div className="pt-7">
        <Banner
          src="/banner-home-01.png"
          alt="Até 55% de desconto só esse mês"
        />
      </div>
      <Categories />
      <TitleCarousel title="Ofertas" />
      <Carousel products={dealsProducts} />
      <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />
      <TitleCarousel title="Ofertas" />
      <Carousel products={keyboards} />
    </div>
  );
}
