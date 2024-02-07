import Container from "@/app/_components/Container";
import Image from "next/image";
import RecentPosts from "@/app/_components/RecentPosts";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relativ flex justify-between items-center`}>
          <Image
            src={`/home.jpeg`}
            alt="대표 이미지"
            width={350}
            height={400}
            objectFit={"cover"}
            className={`rounded-3xl`}
          />
          <div className={"my-20 flex  flex-col item-center "}>
            <h1 className={"text-1.7xl font-extrabold mb-3"}>Contact</h1>
            Phone : 010-5910-7294
            <br />
            Email : lovaoi777@naver.com
            <br />
            Git : https://github.com/lovaoi777
            <br />
            <h1 className={"text-1.7xl font-extrabold mt-3 mb-3"}>
              📚Education
            </h1>
            현) 계명대학교 컴퓨터공학과 4학년 졸업예정
          </div>
        </div>
        <RecentPosts />
      </div>
    </Container>
  );
}
