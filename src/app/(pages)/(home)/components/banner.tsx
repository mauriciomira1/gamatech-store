import Image, { ImageProps } from "next/image";

const Banner = ({ alt, src, ...props }: ImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-full object-cover"
      {...props}
    />
  );
};

export default Banner;
