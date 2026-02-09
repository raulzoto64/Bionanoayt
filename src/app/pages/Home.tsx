import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Purpose } from "../components/Purpose";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { Products } from "../components/Products";
// 1. Cambia la importación al nombre del nuevo archivo/componente de MUI
import { TimelineMUI } from "../components/Timeline";
import { Leadership } from "../components/Leadership";
import { EcosystemMUI } from "../components/Ecosystem";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="trust">
        <TrustBar />
      </div>
      <div id="purpose">
        <Purpose />
      </div>
      <div id="featured">
        <FeaturedProduct />
      </div>
      <div id="products">
        <Products />
      </div>
      {/* 2. Reemplaza <Timeline /> por <TimelineMUI /> */}
      <div id="timeline">
        <TimelineMUI />
      </div>
      <div id="team">
        <Leadership />
      </div>
      <div id="ecosystem">
        <div id="allies">
          <EcosystemMUI />
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
