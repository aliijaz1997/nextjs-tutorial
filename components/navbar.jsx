import Link from "next/link";
import Image from "next/image";
import "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className="">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas/">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
