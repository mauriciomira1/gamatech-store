import Banner from "./components/banner";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-7">
      <div className="pt-7">
        <Banner
          src="/banner-home-01.png"
          alt="Até 55% de desconto só esse mês"
        />
      </div>
      <Categories />
    </div>
  );
}
