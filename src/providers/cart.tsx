"use client";
import { ProductWithTotalPriceProps } from "@/helpers/product";
import { ReactNode, createContext, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPriceProps {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  cartDiscount: number;
  addToCart(product: CartProduct): void;
  addOne(product: CartProduct): void;
  decreaseOne(product: CartProduct): void;
  removeProduct(product: CartProduct): void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subtotal: 0,
  total: 0,
  cartDiscount: 0,
  addToCart: () => {},
  addOne: () => {},
  decreaseOne: () => {},
  removeProduct: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    const productAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productAlreadyOnCart) {
      setProducts((prev) => {
        return prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        });
      });
    } else setProducts((prev) => [...prev, product]);
  };

  const addOne = (product: CartProduct) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      }),
    );
  };

  const decreaseOne = (product: CartProduct) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity - 1 };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const removeProduct = (product: CartProduct) => {
    setProducts((prev) => {
      return prev.filter((cartProduct) => cartProduct.id !== product.id);
    });
  };

  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.totalPrice) * product.quantity;
    }, 0);
  }, [products]);

  const cartDiscount = subtotal - total;

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        addOne,
        decreaseOne,
        removeProduct,
        subtotal,
        total,
        cartDiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
