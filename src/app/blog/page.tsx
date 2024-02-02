import type { NextPage } from "next";
import BlogPost from "@/app/_components/BlogPost";
import Container from "@/app/_components/Container";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  console.log(allPosts);
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {allPosts.map((post) => (
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

// export const getStaticProps = async () => {

//
//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default Blog;
