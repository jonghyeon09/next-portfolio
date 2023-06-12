import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>정종현 포트폴리오</title>
        <meta
          name="description"
          content="프론트엔드 개발자 정종현 입니다."
        ></meta>
      </Head>
      <main className={`${inter.className}`}></main>
    </>
  );
}
