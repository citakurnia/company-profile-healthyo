"use client";

import Link from "next/link";
import Image from "next/image";
import NavBarLarge from "./navbarlarge";
import NavBarSmall from "./navbarsmall";

import { SvgMenuButton } from "@/app/assets/svg-collection";
import { ReactNode, useState } from "react";

export default function Header(): ReactNode {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex justify-between items-center px-2">
      <Link href="/.">
        <Image
          alt="logo HealthYo"
          src="/logo-healthyo.png"
          className="h-10 w-auto md:h-12"
          width={80}
          height={80}
          sizes={"(max-width: 768px) 83vw, 100vw"}
        />
      </Link>
      <NavBarLarge />

      <div
        className="md:hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="focus:outline-none py-2" aria-label="open menu">
          <SvgMenuButton />
        </button>
        {isHovered && <NavBarSmall setIsHovered={setIsHovered} />}
      </div>
    </header>
  );
}
