import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between gap-10 py-7">
        <Image
          src="/image/logo.svg"
          alt="SportOn Logo"
          width={127}
          height={30}
        />

        <nav className="flex gap-12 font-medium">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        <div className="flex gap-10">
          <FiSearch size={24} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FiShoppingBag size={24} />
            <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
