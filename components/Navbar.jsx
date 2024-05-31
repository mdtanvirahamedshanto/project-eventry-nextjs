import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand h-8 ">
          <Link href="/">
            <Image src="/myLogoL.png" alt="Eventry" width={135} height={70} />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <SignInOut />
          </li>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
