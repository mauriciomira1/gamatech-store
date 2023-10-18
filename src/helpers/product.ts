import { Product } from "@prisma/client";

export const computeProductTotalPrice = (product: Product) => {
  if (product.discountPercentage > 0) {
    return (
      +product.basePrice -
      (+product.basePrice * product.discountPercentage) / 100
    ).toFixed(2);
  } else {
    return +product.basePrice.toFixed(2);
  }
};
