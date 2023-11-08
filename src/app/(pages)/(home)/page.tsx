import { prismaClient } from "@/lib/prisma";
import Banner from "./components/banner";
import Carousel from "../../../components/ui/Carousel";
import TitleCarousel from "../../../components/ui/TitleCarousel";
import Categories from "./components/categories";
import Link from "next/link";
import BannerPC from "./components/bannerPC";

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
      <div className="flex w-full items-center justify-center max-md:hidden">
        <BannerPC src="/pc-banner-home-01.jpg" alt="Ofertas" href="/deals" />
      </div>

      <Categories />

      <div className="md:pb-6">
        <Link href="/deals" className="inline-block">
          <TitleCarousel title="Ofertas" />
        </Link>
        <Carousel products={dealsProducts} />
      </div>

      <div className="flex w-full items-center justify-center max-md:hidden">
        <BannerPC
          src="/pc-banner-home-02.jpg"
          alt="Ofertas em mouses"
          href="/category/mouses"
        />
      </div>

      <Link href="/category/mouses" className="md:hidden">
        <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />
      </Link>

      <div className="md:pb-6">
        <Link href="/keyboards" className="inline-block">
          <TitleCarousel title="Teclados" />
        </Link>

        <Carousel products={keyboards} />
      </div>

      <div className="flex w-full items-center justify-center max-md:hidden">
        <BannerPC
          src="/pc-banner-home-03.jpg"
          alt="Ofertas em fones de ouvido"
          href="/category/headphones"
        />
      </div>
      <Link href="/category/headphones" className="md:hidden">
        <Banner src="/banner-home-03.png" alt="Até 20% de desconto em fones" />
      </Link>

      <div className="md:pb-6">
        <Link href="/mouses" className="inline-block">
          <TitleCarousel title="Mouses" />
        </Link>
        <Carousel products={mouses} />
      </div>
    </div>
  );
}
