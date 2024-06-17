import Image from "next/image";

export default function HeroBanner() {
  return (
    <>
      <div className="relative h-[500px] md:h-[500px] lg:h-svh">
        <div className="relative h-[500px] md:h-[500px] lg:h-svh bg-gradient-to-b from-white/40 from-10% via-white/60 via-30% to-white/0 z-30 to-90%" />
        <Image
          className="fade-in"
          src="/hero-image.png"
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
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
