import Head from "next/head";
import NavMenu from "@/app/_components/NavMenu";
import Image from "next/image";
import metadata from "../../../util/metadata";

export default function Container(props: any) {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/logo.jpeg`}
            alt="로고"
            width={40}
            height={100}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>My Blog</span>
        </div>
        <NavMenu />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
}
