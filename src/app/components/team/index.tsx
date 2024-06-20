"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import useIsMobile from "@/utils/hooks/useIsMobile";

import React, { ReactNode } from "react";
import { useUserContext } from "@/utils/context/user-context";

const CarouselUsers = dynamic(() => import("./users-team"), { ssr: false });

export default function Team(): ReactNode {
  const { users } = useUserContext();
  const isMobile = useIsMobile();

  const expertise = [
    "Executive Director",
    "Marketing and Communication",
    "Production",
    "Quality Control",
  ];

  return (
    <>
      <h2 className="text-center pt-3 mb-3 text-black/70 z-50">TEAM</h2>
      {isMobile ? (
        <div className="lg:hidden text-center px-2 pt-2">
          <CarouselUsers users={users} expertise={expertise} />
        </div>
      ) : (
        <div className="hidden lg:flex lg:space-x-3 justify-between lg:px-5 xl:px-24">
          {users.map((user, index) => (
            <div className="flex flex-col items-center" key={index}>
              <Image
                src={user.picture.large}
                alt="User Photo"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="mt-2 font-bold text-blue-deep text-lg">{`${user.name.first} ${user.name.last}`}</div>
              <div className="font-semibold mb-2">{expertise[index]}</div>
              <div className="text-sm">Phone: {user.phone}</div>
              <div className="text-sm">{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
