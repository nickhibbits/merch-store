import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import FeaturePanelPrimary from "@/components/Panels/FeaturePanel/FeaturePanelPrimary/FeaturePanelPrimary";
import FeaturePanelSecondary from "@/components/Panels/FeaturePanel/FeaturePanelSecondary/FeaturePanelSecondary";
import SpecialsPanel from "@/components/Panels/SpecialsPanel/SpecialsPanel";

import "@/styles/layout.scss";

import { products } from "@/data/dummy";
import "@/styles/layout.scss";

export default function Home() {
  return (
    <main className="page_container grid grid_page_container">
      <section className="feature_wrapper grid">
        <FeaturePanelPrimary />
        <FeaturePanelSecondary />
      </section>
      <section className="product_card_wrapper">
        <h2>Hot Items</h2>
        <ul className="product_card_list">
          {products.map((product) => {
            return (
              <li className="product_card" key={product.productId}>
                <ProductCard />
              </li>
            );
          })}
        </ul>
      </section>
      <section className="specials_wrapper">
        <SpecialsPanel />
        <ul className="product_card_list">
          {products.map((product) => {
            return (
              <li className="product_card" key={product.productId}>
                <ProductCard />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
