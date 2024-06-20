import Image from "next/image";
import RichText from "@/utils/richtext";
import { ReactNode } from "react";

export default function SectionCard({
  sectionDetail,
  layout,
}: {
  sectionDetail: any;
  layout: "home" | "about";
}): ReactNode {
  const title: string = sectionDetail.fields.section;
  const titleUpperCase = title.toUpperCase();

  const { fields }: { fields: { file: { url: string } } } =
    sectionDetail.fields.photoRepresentation;

  if (layout === "home") {
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
  return (
    <div className="flex flex-col px-2 py-2">
      <h2 className="pb-3 text-center">
        <div className="bg-white/50 rounded-full py-1">{titleUpperCase}</div>
      </h2>
      <div className="flex flex-col items-center text-pretty">
        <Image
          className="drop-shadow-lg my-4 rounded-3xl"
          alt="image"
          src={`https:${fields.file.url}`}
          width={300}
          height={200}
        />
        <div className="mt-4 mx-3 text-sm font-medium text-black/80 text-balance">
          <RichText document={sectionDetail.fields.description} />
        </div>
      </div>
    </div>
  );
}
