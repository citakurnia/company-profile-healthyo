import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function NavBarSmall({
  setIsHovered,
}: {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="flex flex-col md:hidden bg-white-broken/90 shadow-lg rounded-lg p-4 absolute top-12 right-4 w-40">
        <Link
          href="/."
          className="block mb-4 text-blue-deep hover:text-black/70 font-semibold text-center"
          onClick={() => setIsHovered(false)}
        >
          HOME
        </Link>
        <Link
          href="/pages/about-us"
          className="block mb-4 text-blue-deep hover:text-black/70 font-semibold text-center"
          onClick={() => setIsHovered(false)}
        >
          ABOUT US
        </Link>
        <Link
          href="/pages/products"
          className="block mb-4 text-blue-deep hover:text-black/70 font-semibold text-center"
          onClick={() => setIsHovered(false)}
        >
          PRODUCTS
        </Link>
        <Link
          href="/pages/team"
          className="block text-blue-deep hover:text-black/70 font-semibold text-center"
          onClick={() => setIsHovered(false)}
        >
          TEAM BEHIND
        </Link>
      </div>
    </>
  );
}
