import Link from "next/link";

export default function NavBarLarge() {
  return (
    <>
      <nav className="hidden md:flex md:pr-4 md:space-x-8 lg:space-x-10">
        <Link
          href="/."
          className="text-blue-deep hover:text-black/70 font-semibold"
        >
          HOME
        </Link>
        <Link
          href="/pages/about-us"
          className="text-blue-deep hover:text-black/70 font-semibold"
        >
          ABOUT US
        </Link>
        <Link
          href="/pages/products"
          className="text-blue-deep hover:text-black/70 font-semibold"
        >
          PRODUCTS
        </Link>
        <Link
          href="/pages/team"
          className="text-blue-deep hover:text-black/70 font-semibold"
        >
          TEAM BEHIND
        </Link>
      </nav>
    </>
  );
}
