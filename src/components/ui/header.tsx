"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";

const Header = () => {
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };

  const { status, data } = useSession();

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
            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user?.image && (
                      <AvatarImage
                        src={data.user.image}
                        className="w-10 rounded-full font-medium"
                      />
                    )}
                  </Avatar>
                  <p>{data.user.name}</p>
                </div>

                <Separator />
              </div>
            )}
            <div className="mt-4 flex flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={handleLoginClick}
                >
                  <LogInIcon size={16} /> Fazer login
                </Button>
              )}
              {status === "authenticated" && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={handleLogoutClick}
                >
                  <LogOutIcon size={16} /> Fazer logout
                </Button>
              )}
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
