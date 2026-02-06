import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Purpose } from "../components/Purpose";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { Products } from "../components/Products";
import { Timeline } from "../components/Timeline";
import { Leadership } from "../components/Leadership";
import { Ecosystem } from "../components/Ecosystem";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="trust"><TrustBar /></div>
      <div id="purpose"><Purpose /></div>
      <div id="featured"><FeaturedProduct /></div>
      <div id="products"><Products /></div>
      <div id="timeline"><Timeline /></div>
      <div id="team"><Leadership /></div>
      <div id="ecosystem">
        <div id="allies">
          <Ecosystem />
        </div>
      </div>
      <div id="contact"><Footer /></div>
    </>
  );
}