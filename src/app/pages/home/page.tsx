import Testimony from "@/app/components/testimony";
import CompanyOverview from "./company-overview";
import HeroBanner from "./hero-banner";
import ProductOverview from "./product-overview";
import { ReactNode } from "react";

export default function Home(): ReactNode {
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
