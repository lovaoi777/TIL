import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className={"m-5"}>
      <Link href="/">
        <span className={`mr-5`}>Home</span>
      </Link>
      <Link href="/about">
        <span className={`mr-5`}>About</span>
      </Link>
      <Link href="/blog">
        <span className={`mr-5`}>Blog</span>
      </Link>
      <Link href="/project">
        <span className={"mr-5"}>Project</span>
      </Link>
    </nav>
  );
}
