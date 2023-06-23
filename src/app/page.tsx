import AuthHeader from "@/components/AuthHeader";
import ProductCard from "@/components/productCard";
import ProductList from "@/components/productList";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <AuthHeader />
      <div id="root" className="pt-[60px] 2xl:min-w-[61rem] 2xl:min-h-[31rem]">
        <ProductList name="Teclados">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>

        <ProductList name="Switches">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>

        <ProductList name="Cases">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>

        <ProductList name="Keycaps">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductList>
      </div>
    </main>
  );
}
