"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {
  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <div>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="text-left font-semibold">Menu</SheetHeader>
            <div className="mt-2 flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} /> Fazer login
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} /> Home
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon size={16} /> Ofertas
              </Button>

              <Button variant="outline" className="w-full justify-start gap-2">
                <ListOrderedIcon size={16} /> Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold">
          <span className="text-primary">TechGama</span> Store
        </h1>
        <Button size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </Card>
    </div>
  );
};

export default Header;
