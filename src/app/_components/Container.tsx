import Head from "next/head";
import NavMenu from "@/app/_components/NavMenu";
import Image from "next/image";
import metadata from "../../../util/metadata";
import DarkMode from "@/app/_components/DarkMode";

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
        className={`w-full max-w-3xl flex flex-row justify-between  items-center my-1`}
      >
        <NavMenu />
        <DarkMode />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
}
