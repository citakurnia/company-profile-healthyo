import Image from "next/image";
import { ReactNode } from "react";

export default function HeroBanner(): ReactNode {
  return (
    <>
      <div className="relative h-[500px] lg:h-svh">
        <div className="relative h-[500px] lg:h-svh bg-gradient-to-b from-white/40 from-10% via-white/60 via-30% to-white/0 z-30 to-90%" />
        <Image
          src="/hero-image.png"
          alt="Hero Banner"
          fill
          sizes="
         (max-width: 768px) 768px,
         (max-width: 1024px) 1024px,
         (max-width: 1280px) 1280px,
         (max-width: 1536px) 1536px,
         (max-width: 1920px) 1920px,
         100vw"
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          quality={100}
        />
        <div className="absolute inset-0 flex justify-center">
          <div className="flex flex-col space-y-4 mx-10 pt-10 text-3xl md:text-3xl lg:text-5xl font-bold text-center z-30">
            <div className="px-3 text-black/80 font-black">HEALTH YO!</div>
            <div className="px-10 text-black/60">
              Nourishing Wellness, One Sip at a Time.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
