"use client";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeTestimonyFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import CarouselTestimony from "./testimony-carousel";

async function fetchTestimony(): Promise<
  Entry<TypeTestimonyFields, undefined, string>[]
> {
  try {
    const data = await client.getEntries<TypeTestimonyFields>({
      content_type: "testimoni",
    });
    // console.log(data.items);
    return data.items;
  } catch (err) {
    throw new Error("Unable to catch testimony");
  }
}

export default function ProductOverview(): ReactNode {
  const [testimonies, setTestimonies] = useState<
    Entry<TypeTestimonyFields, undefined, string>[] | null
  >(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTestimony();
      setTestimonies(data);
    }
    fetchData();
  }, []);

  if (testimonies !== null) {
    return (
      <>
        <div className="flex flex-col py-4 px-4 m-6 mb-8 rounded-3xl bg-blue-soft">
          <div className="flex flex-col px-2 py-2 lg:pt-4 md:px-10 lg:px-2 xl:px-10">
            <TestimonyCard testimonies={testimonies} />
          </div>
        </div>
      </>
    );
  }
}

function TestimonyCard({
  testimonies,
}: {
  testimonies: Entry<TypeTestimonyFields, undefined, string>[];
}) {
  return (
    <>
      <h2 className="pb-6 text-center">
        <div className="bg-white/50 rounded-full py-1">TESTIMONY</div>
      </h2>
      <div className="lg:hidden" style={{ textAlign: "center" }}>
        <CarouselTestimony testimonies={testimonies} />
      </div>

      <div className="hidden lg:flex lg:flex-row lg:space-x-5 justify-between lg:px-5">
        {testimonies.map((testimony) => (
          <div
            key={testimony.sys.id}
            className="mb-2 w-1/3 flex flex-col items-center"
          >
            <p className="mb-4 text-lg font-semibold text-black/80">
              {testimony.fields.name}
            </p>
            <Image
              className="rounded-full"
              alt="image"
              src={`https:${testimony.fields.closeUpPhoto.fields.file.url}`}
              width={125}
              height={125}
            />
            <p className="text-sm mt-4 p-3 text-black/80 text-pretty text-center bg-pink-soft/60 rounded-xl">
              "{testimony.fields.testimonyText}"
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
