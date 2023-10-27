"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (
  products: CartProduct[],
  orderId: string,
) => {
  // CRIANDO O CHECKOUT COM STRIPE
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${process.env.HOST_URL}/checkout/success`,
    cancel_url: `${process.env.HOST_URL}/checkout/cancelled`,
    metadata: {
      orderId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            images: product.imageUrls,
            description: product.description,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.quantity,
      };
    }),
  });
  return checkout;
};
