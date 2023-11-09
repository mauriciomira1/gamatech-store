import Image from "next/image";
import Link from "next/link";

interface BannerPCProps {
  href: string;
  alt: string;
  src: string;
}

const BannerPC = ({ href, alt, src }: BannerPCProps) => {
  return (
    <Link href={href} className="flex w-full items-center justify-center">
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full object-cover lg:w-[1000px] lg:rounded-2xl"
        quality={100}
        priority
      />
    </Link>
  );
};

export default BannerPC;
