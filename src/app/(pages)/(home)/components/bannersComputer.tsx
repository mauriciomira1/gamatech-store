import Link from "next/link";
import BannerItemPC from "./bannerItemPC";

const BannersComputer = () => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <Link href="/deals">
        <BannerItemPC
          src="/banner-home-01.png"
          alt="Até 55% de desconto só esse mês"
          priority
        />
      </Link>

      <Link href="/category/mouses">
        <BannerItemPC
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
        />
      </Link>

      <Link href="/category/headphones">
        <BannerItemPC
          src="/banner-home-03.png"
          alt="Até 20% de desconto em fones"
        />
      </Link>
    </div>
  );
};

export default BannersComputer;
