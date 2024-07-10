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
        {/* 2 element nawigacji */}
        <nav className="flex gap-10 items-center">
          <Link
            href={"/account/profile"}
            className={`transiton delay-150 duration-300 hover:text-primary ${
              pathname.includes("/account") ? "text-primary" : "text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
          <Link href={"/cart"} className="group">
            <div className="flex items-center h-[60px] relative transition delay-150 duration-300 group-hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
}
