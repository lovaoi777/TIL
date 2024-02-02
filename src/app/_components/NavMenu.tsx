import Link from "next/link";

export default function NavMenu() {
  return (
    <nav>
      <Link href="/">
        <span className={`mr-5`}>Home</span>
      </Link>
      <Link href="/blog">
        <span className={`mr-5`}>Blog</span>
      </Link>
    </nav>
  );
}
