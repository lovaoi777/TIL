import Link from "next/link";
import { allPosts } from "contentlayer/generated";

export default function RecentPosts() {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex  flex-col`}>
        {allPosts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <span className="mt-10">
              <div className={`font-medium text-xl`}>{post.title}</div>
              <div className={`font-light`}>{post.description}</div>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
