"use client";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeCompanyDetailsFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import RichText from "@/utils/richtext";
import Image from "next/image";
import Team from "@/app/components/team";

async function fetchCompanyDetails() {
  try {
    const data = await client.getEntries<TypeCompanyDetailsFields>({
      content_type: "companyDetails",
    });
    return data.items;
  } catch (err) {
    throw new Error("Unable to catch company details");
  }
}

export default function AboutUs(): ReactNode {
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
              <SectionCard sectionDetail={historyDetail} />
            </div>
            <div className="order-2 xl:col-span-1">
              <SectionCard sectionDetail={cultureDetail} />
            </div>
          </div>
        </div>
        <div className="lg:px-24 lg:mb-10 xl:px-36">
          <Team />
        </div>
      </>
    );
  }
}

export function SectionCard({
  sectionDetail,
}: {
  sectionDetail: any;
}): ReactNode {
  const title: string = sectionDetail.fields.section;
  const titleUpperCase = title.toUpperCase();
  const { fields }: { fields: { file: { url: string } } } =
    sectionDetail.fields.photoRepresentation;

  return (
    <div className="flex flex-col px-2 py-2">
      <h2 className="pb-3 text-center">
        <div className="bg-white/50 rounded-full py-1">{titleUpperCase}</div>
      </h2>
      <div className="flex flex-col items-center text-pretty">
        <Image
          className="drop-shadow-lg my-4"
          alt="image"
          src={`https:${fields.file.url}`}
          width={300}
          height={200}
          style={{ borderRadius: "30px" }}
        />
        <div className="mt-4 mx-3 text-sm font-medium text-black/80 text-balance">
          <RichText document={sectionDetail.fields.description} />
        </div>
      </div>
    </div>
  );
}
