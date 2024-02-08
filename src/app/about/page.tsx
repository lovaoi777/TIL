import Container from "@/app/_components/Container";
import Image from "next/image";
import Link from "next/link";

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
      <div className={"my-20 flex flex-col"}>
        <h1 className={"text-1.9xl mb-3"}>
          💻<span className={`text-2xl font-extrabold `}> Experiences</span> or{" "}
          <span className={`text-2xl font-extrabold `}>ProJect</span>
        </h1>
        <div className={"bg-gray-150 border-4  border-solid rounded-2xl p-7"}>
          <h3 className={"text-2xl font-extrabold"}>
            🦁멋쟁이사자처럼 (개발IT연합 동아리)
          </h3>
          <span className={"italic text-gray-400"}>22.3~ 23.12</span>
          <br />
          <div className={"mt-5 text-sm"}>
            <span>
              멋쟁이사자처럼은 대학생들을 대상으로 하는 IT 및 프로그래밍 분야에
              관심을 가지고 있는 학생들이 모이는 대학 IT 연합동아리입니다.
            </span>

            <h1 className={"text-1.9xl font-extrabold mt-2"}>
              프론트개발 입문기
            </h1>
            <span className={"italic text-gray-400"}>22.3~ 22.12</span>
            <div className={"mt-3"}>
              <li className={"mt-3"}>
                처음 개발의 문을 열고 HTML/CSS와 기초적인 JavaScript 문법을 터득
              </li>
              <li className={"mt-3"}>
                간단한 TodoList 페이지와 Naver 메인페이지를 클론코딩 구현
              </li>
              <li className={"mt-3"}>
                {" "}
                React에서 컴포넌트의 상태를 어떻게 다루고 업데이트하는지에 대한
                기본적인 개념 학습
              </li>
              <li className={"mt-3"}>
                Redux에 대한 상태관리가 어떻게 이루어지는에 대해 개념을 학습
              </li>
            </div>
            <h1 className={"text-1.9xl font-extrabold mt-5"}>
              다양한 협업 프로젝트
            </h1>
            <span className={"italic text-gray-400"}>23.1~ 23.12</span>
            <div className={"mt-3 "}>
              <div className={"my-5"}>
                <h3 className={"text-1.9xl font-extrabold"}>똥 강아지</h3>
                <span className={"text-gray-500"}>
                  디지털 공공서비스 문제를 겪는 노인분들에게 자원봉자를
                  매칭시켜주는 서비스
                </span>
                <li className={"mt-2"}>
                  <span className={`text-1.7xl font-extrabold `}>
                    개발 기간 :{" "}
                  </span>{" "}
                  23.8.16~ 23.8.18{" "}
                </li>
                <li className={"mt-2"}>Back End : 1명 ,Front End : 4명</li>
                <li className={"mt-2"}>
                  React, TypeScript, Material-UI, Axios, Figma, Git
                </li>
                <li className={"mt-2"}>
                  <span className={`text-1.7xl font-extrabold `}>작업내용</span>{" "}
                </li>
                <div className={"m-3"}>
                  <p className={"mt-2"}>
                    1. 로그인 페이지 및 사용자 유저 관련 마크업 화면 구성
                  </p>
                  <p className={"mt-2"}>2. 로그인에 관련된 유효성검사</p>
                  <p className={"mt-2"}>
                    3. 로그인과 관련된 데이터 서버와 REST API 연결{" "}
                  </p>
                </div>
                <Image
                  src={`/project1.png`}
                  alt="대표 이미지"
                  width={300}
                  height={300}
                  objectFit="cover"
                  className={`rounded-3xl`}
                />
              </div>
              <div className={"my-10"}>
                <h3 className={"text-1.9xl font-extrabold"}>Tour Route</h3>
                <span className={"text-gray-500"}>
                  상도 지역의 여행지를 추천받고, 커뮤니티에서 동행인도 만날 수
                  있는 간편한 여행의 시작. 투어라우트
                </span>
                <li className={"mt-2"}>
                  <span className={`text-1.7xl font-extrabold `}>
                    개발 기간 :{" "}
                  </span>{" "}
                  2023.08.01 ~ 2023.11.06{" "}
                </li>
                <li className={"mt-2"}>
                  Back End : 2명 ,Front End : 2명 Designer : 1명
                </li>
                <li className={"mt-2"}>
                  React, JavaScript, Styled-components,Redux-toolkit{" "}
                </li>
                <li className={"mt-2"}>
                  <span className={`text-1.7xl font-extrabold `}>작업내용</span>{" "}
                </li>
                <div className={"m-3"}>
                  <p className={"mt-2"}>
                    1. 여행일정계획, 축제페이지 유저관련 마크업 화면 구성
                  </p>
                  <p className={"mt-2"}>
                    2. 각각의 여행일정 입력 페이지의 Redux-toolkit 을 사용하여
                    전역 상태를 관리{" "}
                  </p>
                  <p className={"mt-2"}>
                    3 .축제데이터 또한 REST API 받아와 화면에 출력{" "}
                  </p>
                  <p className={"mt-2"}>
                    4. 사용자가 여행 일정에 기입한 상태를 REST API 이용하여
                    지도API에 결과값 도출
                  </p>
                  <p className={"mt-2"}>5. Vercel 배포하기</p>
                  <Link href="https://www.notion.so/59ae2d4bc90a47268b9eb434cbfc369a?pvs=4#a8ce223aa98e49ff835cffb9fcdee18b">
                    <span className={"text-gray-400 mt-3"}>
                      {" "}
                      -GitHub 바로가기
                    </span>
                  </Link>
                </div>
                <Image
                  src={`/TourRoute.png`}
                  alt="대표 이미지"
                  width={300}
                  height={300}
                  objectFit="cover"
                  className={`rounded-3xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

// ## 🔥Experiences --- ## 🦁멋쟁이사자처럼(10기) (2022.3~ 2022.12)
// ![멋사수료증.png](%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A5%2059ae2d4bc90a47268b9eb434cbfc369a/%25E1%2584%2586%25E1%2585%25A5%25E1%2586%25BA%25E1%2584%2589%25E1%2585%25A1%25E1%2584%2589%25E1%2585%25AE%25E1%2584%2585%25E1%2585%25AD%25E1%2584%258C%25E1%2585%25B3%25E1%2586%25BC.png)
// 개발IT연합 동아리 (아기사자) - 동아리 가입하여 HTML/CSS , JavaScript 등의
// 기초단계를 배워 기본적인 ToDoList 배움으로써 개발을 시작할 수 있었던
// 계기입니다. ## 🦁멋쟁이사자처럼(11기) (2023.3~ 현재 진행중)
// ![Untitled](%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A5%2059ae2d4bc90a47268b9eb434cbfc369a/Untitled%201.png)
// 개발IT연합 동아리 (운영진) - 2022년 멋쟁이사자처럼 10기에서 배운
// 기초단계와 스스로 공부한 HTML/CSS , JS 기초문법들을 멘티분들에게 설명하는
// 스터디 그룹을 진행하였습니다. 그러나 스터디를 진행하면서 UI가 나오는
// 렌더링과정이나 최적화 할수있는 과정 - 해커톤을 참가하여 각 분야인
// 디자이너, 백엔드 들과 협업하여 프로젝트를 진행 하였습니다.
