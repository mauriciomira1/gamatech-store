import { useContext } from "react";
import { SheetContent } from "./sheet";
import { CartContext } from "@/providers/cart";
import { ShoppingBagIcon } from "lucide-react";
import { Badge } from "./badge";
import CartmenuItem from "./cartmenuItem";

const Cartmenu = () => {
  const { products } = useContext(CartContext);

  return (
    <SheetContent>
      <div className="flex items-start py-7">
        <Badge
          className="gap-2 rounded-full border-2 border-primary px-4 py-[0.375rem] text-base font-bold uppercase"
          variant="outline"
        >
          <ShoppingBagIcon />
          <p className="font-bold uppercase">meus pedidos</p>
        </Badge>
      </div>
      {products.map((product) => (
        <CartmenuItem product={product} key={product.id} />
      ))}
    </SheetContent>
  );
};

export default Cartmenu;
