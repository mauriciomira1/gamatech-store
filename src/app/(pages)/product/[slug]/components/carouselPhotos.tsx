"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselPhotosProps {
  imageUrls: string[];
  name: string;
}

const CarouselPhotos = ({ imageUrls, name }: CarouselPhotosProps) => {
  const [image, setImage] = useState(imageUrls[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center bg-accent">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-full max-w-[70%]"
        />
      </div>

      <div className="mt-4 flex min-h-[77px] gap-4 px-4">
        {imageUrls.map((imageUrl) => (
          <div
            key={imageUrl}
            className={`flex h-auto w-full items-center justify-center rounded-lg bg-accent ${
              image === imageUrl && "border border-primary"
            }`}
            onClick={() => setImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full max-h-[70%] w-auto"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselPhotos;
