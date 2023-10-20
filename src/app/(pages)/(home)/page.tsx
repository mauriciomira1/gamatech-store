import { prismaClient } from "@/lib/prisma";
import Banner from "./components/banner";
import Carousel from "../../../components/ui/Carousel";
import TitleCarousel from "../../../components/ui/TitleCarousel";
import Categories from "./components/categories";

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
      category: {
        slug: "keyboards",
      },
    },
  });
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
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

      <div>
        <TitleCarousel title="Ofertas" />
        <Carousel products={dealsProducts} />
      </div>

      <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />

      <div>
        <TitleCarousel title="Teclados" />
        <Carousel products={keyboards} />
      </div>

      <Banner src="/banner-home-03.png" alt="Até 20% de desconto em fones" />

      <div>
        <TitleCarousel title="Mouses" />
        <Carousel products={mouses} />
      </div>
    </div>
  );
}
