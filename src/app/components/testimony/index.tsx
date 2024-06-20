"use client";

import UserTeam from "@/types/random-user/TypeUserTeam";
import Image from "next/image";
import dynamic from "next/dynamic";
import useIsMobile from "@/utils/hooks/useIsMobile";

import { client } from "@/utils/contentful";
import { Entry } from "contentful";
import { TypeTestimonyFields } from "@/types/contentful";
import { ReactNode } from "react";
import { useState, useEffect } from "react";

const CarouselTestimony = dynamic(() => import("./testimony-carousel"), {
  ssr: false,
});

async function fetchTestimony(): Promise<
  Entry<TypeTestimonyFields, undefined, string>[]
> {
  try {
    const testimonies = await client.getEntries<TypeTestimonyFields>({
      content_type: "testimoni",
    });
    return testimonies.items;
  } catch (err) {
    throw new Error("Unable to catch testimony");
  }
}

export default function ProductOverview(): ReactNode {
  const [testimonies, setTestimonies] = useState<
    Entry<TypeTestimonyFields, undefined, string>[] | null
  >(null);
  const [users, setUsers] = useState<UserTeam[]>([]);

  async function fetchTestimonyandUser() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers.results);
      const fetchedTestimony = await fetchTestimony();
      setTestimonies(fetchedTestimony);
    } catch (err) {
      throw new Error("Unable to catch User Teams");
    }
  }

  useEffect(() => {
    fetchTestimonyandUser();
  }, []);

  if (testimonies !== null) {
    return (
      <>
        <div className="flex flex-col py-4 px-4 m-6 mb-8 rounded-3xl bg-blue-soft">
          <div className="flex flex-col px-2 py-2 lg:pt-4 md:px-10 lg:px-2 xl:px-10">
            <TestimonyCard testimonies={testimonies} users={users} />
          </div>
        </div>
      </>
    );
  }
}

function TestimonyCard({
  testimonies,
  users,
}: {
  testimonies: Entry<TypeTestimonyFields, undefined, string>[];
  users: UserTeam[];
}): ReactNode {
  const isMobile = useIsMobile();
  return (
    <>
      <h2 className="pb-6 text-center">
        <div className="bg-white/50 rounded-full py-1">TESTIMONY</div>
      </h2>
      {isMobile ? (
        <div className="lg:hidden" style={{ textAlign: "center" }}>
          <CarouselTestimony testimonies={testimonies} users={users} />
        </div>
      ) : (
        <div className="hidden lg:flex lg:flex-row lg:space-x-5 justify-between lg:px-5">
          {testimonies.map((testimony, index) => (
            <div
              key={testimony.sys.id}
              className="mb-2 w-1/3 flex flex-col items-center"
            >
              <p className="mb-4 text-lg font-semibold text-black/80">
                {`${users[index].name.first} ${users[index].name.last}`}
              </p>
              <Image
                className="rounded-full"
                alt="image"
                src={users[index].picture.large}
                width={125}
                height={125}
              />
              <p className="text-sm mt-4 p-3 text-black/80 text-pretty text-center bg-pink-soft/60 rounded-xl">
                &quot;{testimony.fields.testimonyText}&quot;
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
