import Link from "next/link";
import BannerPC from "./bannerPC";

const BannerComputer = () => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <Link href="/deals">
        <BannerPC
          src="/pc-banner-home-01.jpg"
          alt="Até 55% de desconto só esse mês"
          priority
        />
      </Link>

      <Link href="/category/mouses">
        <BannerPC
          src="/pc-banner-home-02.jpg"
          alt="Até 55% de desconto em mouses"
        />
      </Link>

      <Link href="/category/headphones">
        <BannerPC
          src="/pc-banner-home-03.jpg"
          alt="Até 20% de desconto em fones"
        />
      </Link>
    </div>
  );
};

export default BannerComputer;
