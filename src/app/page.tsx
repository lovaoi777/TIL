import Container from "@/app/_components/Container";
import Image from "next/image";
import RecentPosts from "@/app/_components/RecentPosts";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpeg`}
            alt="대표 이미지"
            width={1000}
            layout={`responsive`}
            height={45}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            병규 Blog
          </span>
        </div>
        <RecentPosts />
      </div>
    </Container>
  );
}
