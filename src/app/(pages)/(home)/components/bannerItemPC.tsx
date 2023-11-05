import Image, { ImageProps } from "next/image";

const BannerItemPC = ({ alt, src, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-auto object-cover"
      {...props}
    />
  );
};

export default BannerItemPC;
