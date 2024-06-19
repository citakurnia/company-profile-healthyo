"use client";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeCompanyDetailsFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Team from "@/app/components/team";
import Link from "next/link";

async function fetchCompanyDetails(): Promise<
  Entry<TypeCompanyDetailsFields, undefined, string>[]
> {
  try {
    const data = await client.getEntries<TypeCompanyDetailsFields>({
      content_type: "companyDetails",
    });
    return data.items;
  } catch (err) {
    throw new Error("Unable to catch company details");
  }
}

export default function CompanyOverview(): ReactNode {
  const [companyDetails, setCompanyDetails] = useState<
    Entry<TypeCompanyDetailsFields, undefined, string>[] | null
  >(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCompanyDetails();
      setCompanyDetails(data);
    }
    fetchData();
  }, []);

  if (companyDetails !== null) {
    const historyDetail = companyDetails?.filter(
      (entry) => entry.fields.section === "History"
    )[0];
    const cultureDetail = companyDetails?.filter(
      (entry) => entry.fields.section === "Culture"
    )[0];

    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 px-4 m-6 rounded-3xl bg-blue-soft">
          <div className="order-1 lg:col-span-1">
            <SectionCard sectionDetail={historyDetail} />
          </div>
          <div className="order-2 lg:col-span-1">
            <SectionCard sectionDetail={cultureDetail} />
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
}

function SectionCard({ sectionDetail }: { sectionDetail: any }): ReactNode {
  const title: string = sectionDetail.fields.section;
  const titleUpperCase = title.toUpperCase();

  const { fields }: { fields: { file: { url: string } } } =
    sectionDetail.fields.photoRepresentation;

  return (
    <div className="flex flex-col px-2 py-2 lg:py-4 md:px-10 lg:px-2 xl:px-10">
      <h2 className="pb-3 text-center">
        <div className="bg-white/50 rounded-full py-1">{titleUpperCase}</div>
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row py-3 lg:py-6 items-center text-pretty">
        <Image
          className="drop-shadow-lg rounded-3xl"
          alt="image"
          src={`https:${fields.file.url}`}
          width={300}
          height={200}
        />
        <div className="mt-4 mx-3 md:mt-0 lg:mt-8 md:pl-10 lg:px-4 xl:pl-10 xl:mt-0 text-sm font-medium text-black/80 text-center md:text-left lg:text-center xl:text-left">
          {sectionDetail.fields.summary}
        </div>
      </div>
    </div>
  );
}
