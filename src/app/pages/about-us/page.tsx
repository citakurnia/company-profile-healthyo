"use client";

import { ReactNode } from "react";
import { useCompanyDetailsContext } from "@/utils/context/company-context";
import Team from "@/app/components/team";
import SectionCard from "@/app/components/company-section/company-card";

export default function AboutUs(): ReactNode {
  const { companyDetails } = useCompanyDetailsContext();

  const historyDetail = companyDetails?.filter(
    (entry) => entry.fields.section === "History"
  )[0];
  const cultureDetail = companyDetails?.filter(
    (entry) => entry.fields.section === "Culture"
  )[0];

  return (
    <>
      <div className="flex flex-col shadow-md justify-center text-4xl text-white font-bold h-32 text-center bg-[url('/pattern-banner.svg')]">
        <p className="drop-shadow-md">ABOUT HEALTH YO!</p>
      </div>
      <div className="flex flex-col justify-center space-y-4 text-center rounded-b-3xl lg:mx-60 py-5 px-2 text-balance bg-blue-soft">
        <h2>Vision</h2>
        <div>
          Our vision is to bring the benefits of probiotics to every family,
          promoting health and wellness in our community and beyond.
        </div>
        <h2>Mission</h2>
        <div>
          Our mission is to produce high-quality, delicious yogurt drinks in a
          variety of flavors, ensuring accessibility to nutritious options. We
          are committed to sustainability, ethical practices, and continuous
          innovation to enhance the well-being of our customers.
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-4 text-center rounded-3xl mt-8 mb-4 lg:mx-60 px-2 text-balance bg-blue-soft">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 py-4 px-4 m-6 rounded-3xl bg-blue-soft">
          <div className="order-1 xl:col-span-1">
            <SectionCard sectionDetail={historyDetail} layout="about" />
          </div>
          <div className="order-2 xl:col-span-1">
            <SectionCard sectionDetail={cultureDetail} layout="about" />
          </div>
        </div>
      </div>
      <div className="lg:px-20 mb-10 xl:px-36">
        <Team />
      </div>
    </>
  );
}
