import { allPosts } from "contentlayer/generated";
import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";
import Container from "@/app/_components/Container";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default async function Post({ params }: Props) {
  const post = await getDocFormParams({ params });
  const MDXComponent = await getMDXComponent(post.body.code);
  if (!post) {
    return notFound();
  }
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };
  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose">
        <h1 className="text-sky-700">{post.title}</h1>
        <MDXComponent code={post.body.code} />
      </div>
    </Container>
  );
}
async function getDocFormParams({ params }: Props) {
  const doc = allPosts.find(
    (doc) => doc._raw.flattenedPath === params.slug.toString(),
  );
  return doc ?? null;
}
// export async function generateStaticParams() {
//   return allPosts.map((doc) => ({
//     slug: doc._raw.flattenedPath,
//   }));
// }
