"use client";

import { ReactNode } from "react";
import Team from "@/app/components/team";
import Link from "next/link";
import SectionCard from "@/app/components/company-section/company-card";
import { useCompanyDetailsContext } from "@/utils/context/company-context";

export default function CompanyOverview(): ReactNode {
  const { companyDetails } = useCompanyDetailsContext();
  if (!companyDetails || companyDetails.length === 0) {
    throw new Promise(() => {});
  }
  const historyDetail = companyDetails.filter(
    (entry) => entry.fields.section === "History"
  )[0];
  const cultureDetail = companyDetails.filter(
    (entry) => entry.fields.section === "Culture"
  )[0];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 px-4 m-6 rounded-3xl bg-blue-soft">
        <div className="order-1 lg:col-span-1">
          <SectionCard sectionDetail={historyDetail} layout="home" />
        </div>
        <div className="order-2 lg:col-span-1">
          <SectionCard sectionDetail={cultureDetail} layout="home" />
        </div>
        <div className="order-3 lg:col-span-2 hover:bg-white/50 rounded-2xl pb-4 m-5">
          <Team />
        </div>
        <Link
          href="/pages/about-us"
          className="order-4 lg:col-span-2 text-sm text-right mr-4 text-blue-deep hover:underline hover:underline-offset-2"
        >
          Learn more about us...
        </Link>
      </div>
    </>
  );
}
