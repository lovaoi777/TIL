import Container from "@/app/_components/Container";
import Image from "next/image";

export default function Page() {
  return (
    <Container>
      <div className={"flex"}>
        <Image
          src={`/Profile.jpeg`}
          alt="대표 이미지"
          width={300}
          height={300}
          objectFit="cover"
          className={`rounded-3xl`}
        />
        <div className={"my-20"}>
          <h1 className={"text-1.7xl font-extrabold mb-3"}>
            문제를 해결하는데 열정적인 개발자입니다.
          </h1>
          <span className={"text-base"}>
            좋은 프론트개발자가 되기 위해 지속적으로 새로운 기술과 도구에 대한
            학습을 게을리하지 않고 있습니다.
            <br />
            <br />
            새로운 기술 트렌드와 프레임워크, 라이브러리에 대한 호기심이 저를
            계속해서 동기부여하고, 이를 활용하여 문제를 해결하고 효율적인
            프로덕트를 개발하는 것이 제 목표입니다.
            <br />
          </span>
        </div>
      </div>
      <div className={"my-20"}>
        <h1 className={"text-3xl font-extrabold mb-3"}>Stack</h1>
      </div>
    </Container>
  );
}
