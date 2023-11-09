import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CatalogItems from "./components/catalogItems";

const Catalog = async () => {
  return (
    <div className="p-5">
      <Badge
        className="mb-7 gap-1 rounded-full border-2 border-primary px-3 py-[0.375rem] text-base font-bold uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="flex justify-center">
        <CatalogItems />
      </div>
    </div>
  );
};

export default Catalog;
