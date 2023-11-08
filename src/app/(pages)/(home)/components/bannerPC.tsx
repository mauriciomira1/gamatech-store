import Image from "next/image";
import Link from "next/link";

interface BannerPCProps {
  href: string;
  alt: string;
  src: string;
}

const BannerPC = ({ href, alt, src }: BannerPCProps) => {
  return (
    <Link href={href} className="w-full">
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full object-cover"
      />
    </Link>
  );
};

export default BannerPC;
