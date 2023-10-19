import { ArrowDown } from "lucide-react";
import { ClassNameValue, twMerge } from "tailwind-merge";

const DiscountBadge = ({
  children,
  className,
}: {
  children: number;
  className?: ClassNameValue;
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center rounded-full bg-[#5033C3] py-0.5 pl-2 pr-3",
        className,
      )}
    >
      <ArrowDown size={16} />
      <span className="font-bold">{children}%</span>
    </div>
  );
};

export default DiscountBadge;
