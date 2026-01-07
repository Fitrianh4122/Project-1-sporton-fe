import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-52">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-[420px]">
          <Image
            src="/image/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="w-[420px] grid grid-cols-2">
          <div className="flex gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Explore Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto py-6 flex justify-between">
          <div>SportsOn © 2025 All Rights Reserved.</div>
          <div className="grid grid-cols-2 w-[420px]">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
