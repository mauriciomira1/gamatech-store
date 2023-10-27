import { useContext } from "react";
import { SheetContent } from "./sheet";
import { CartContext } from "@/providers/cart";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import CartmenuItem from "./cartmenuItem";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "./button";
import createOrder from "@/actions/order";
import { useSession } from "next-auth/react";

const Cartmenu = () => {
  const { products, subtotal, total, cartDiscount } = useContext(CartContext);
  const { data } = useSession();

  const handlePurchase = async () => {
    if (!data?.user) {
      // retornar para Login Page
      return;
    }

    await createOrder(products, (data?.user as any).id);

    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <SheetContent className="flex flex-col justify-between">
      {products.length > 0 ? (
        <div className="flex h-full flex-col justify-between">
          <ScrollArea>
            <div className="flex items-start py-7">
              <Badge
                className="gap-2 rounded-full border-2 border-primary px-4 py-[0.375rem] text-base font-bold uppercase"
                variant="outline"
              >
                <ShoppingBagIcon />
                <p className="font-bold uppercase">CARRINHO</p>
              </Badge>
            </div>

            <div>
              {products.map((product) => (
                <CartmenuItem product={product} key={product.id} />
              ))}
            </div>
          </ScrollArea>

          <div className="flex flex-col gap-3">
            <Separator />
            <div className="flex items-center justify-between text-xs">
              <p>Subtotal</p>
              <p>R$ {subtotal.toFixed(2)}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-xs">
              <p>Entrega</p>
              <p>GRÁTIS</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-xs">
              <p>Descontos</p>
              <p>- R$ {cartDiscount.toFixed(2)}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-sm font-bold">
              <p>Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </div>
            <Button
              className="h-18 mt-4 font-bold uppercase"
              onClick={handlePurchase}
            >
              Finalizar compra
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-28">
          <ShoppingCartIcon size={38} />
          <p className="pt-6 text-center text-sm">
            Carrinho vazio.
            <br />
            Vamos fazer compras?
          </p>
        </div>
      )}
    </SheetContent>
  );
};

export default Cartmenu;
