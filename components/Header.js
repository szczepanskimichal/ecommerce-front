import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const inactiveLink =
    "hover:text-primary hover:scale-105 hover:decoration-primary decoration-secondary underline underline-offset-4 transition-all delay-150 duration-300";
  const activeLink = inactiveLink.replace(
    "decoration-secondary",
    "decoration-white"
  );

  const routes = useRouter();
  const { pathname } = routes;

  return (
    <>
      <header className="fixed top-0 w-full hidden sm:flex justify-around h-[80px] items-center bg-secondary text-white z-2">
        <Link className={inactiveLink} href="/">
          Ecommerce
        </Link>
        <nav className="flex gap-10">
          <Link
            className={`${pathname == "/" ? activeLink : inactiveLink}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`${
              pathname.includes("/products") ? activeLink : inactiveLink
            }`}
            href={"/products"}
          >
            All Products
          </Link>
          <div>
            <div>Categories</div>
          </div>
        </nav>
      </header>
    </>
  );
}
