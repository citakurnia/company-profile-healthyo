import Testimony from "@/app/components/testimony";
import CompanyOverview from "./company-overview";
import HeroBanner from "./hero-banner";
import ProductOverview from "./product-overview";

export default function Home() {
  return (
    <>
      {/* metadata */}
      <HeroBanner />
      <CompanyOverview />
      <ProductOverview />
      <Testimony />
    </>
  );
}
