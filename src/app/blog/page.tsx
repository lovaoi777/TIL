import type { NextPage } from "next";
import BlogPost from "@/app/_components/BlogPost";
import Container from "@/app/_components/Container";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {allPosts
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((post) => (
            <BlogPost
              date={post.date}
              title={post.title}
              des={post.description}
              slug={post._raw.flattenedPath}
              key={post._id}
            />
          ))}
      </div>
    </Container>
  );
};

export default Blog;
