import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import FeaturePanelPrimary from "@/components/Panels/FeaturePanel/FeaturePanelPrimary/FeaturePanelPrimary";
import FeaturePanelSecondary from "@/components/Panels/FeaturePanel/FeaturePanelSecondary/FeaturePanelSecondary";
import SpecialsPanel from "@/components/Panels/SpecialsPanel/SpecialsPanel";

import "@/styles/layout.scss";

export default function Home() {
  return (
    <main className="page_container grid_page_container">
      <section className="feature_wrapper">
        <FeaturePanelPrimary />
        <FeaturePanelSecondary />
      </section>
      <section className="product_card_wrapper">
        <ul className="product_card_list">
          <li className="product_card">
            <ProductCard />
          </li>
          <li className="product_card">
            <ProductCard />
          </li>
          <li className="product_card">
            <ProductCard />
          </li>
          <li className="product_card">
            <ProductCard />
          </li>
          <li className="product_card">
            <ProductCard />
          </li>
        </ul>
      </section>
      <section className="specials_wrapper">
        <SpecialsPanel />
        <div className="product_card_wrapper">
          <ul className="product_card_list">
            <li className="product_card">
              <ProductCard />
            </li>
            <li className="product_card">
              <ProductCard />
            </li>
            <li className="product_card">
              <ProductCard />
            </li>
            <li className="product_card">
              <ProductCard />
            </li>
            <li className="product_card">
              <ProductCard />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
