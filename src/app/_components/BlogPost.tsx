import Link from "next/link";

export default function BlogPost({ date, title, des, slug }) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">{date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
      </div>
    </Link>
  );
}
