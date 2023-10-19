import { Product } from "@prisma/client";

export interface ProductWithTotalPriceProps extends Product {
  totalPrice: number;
}

export const ProductWithTotalPrice = (
  product: Product,
): ProductWithTotalPriceProps => {
  if (product.discountPercentage > 0) {
    return {
      ...product,
      totalPrice: +(
        +product.basePrice -
        (+product.basePrice * product.discountPercentage) / 100
      ).toFixed(2),
    };
  } else {
    return { ...product, totalPrice: +product.basePrice.toFixed(2) };
  }
};
