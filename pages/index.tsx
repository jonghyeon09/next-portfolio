import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Animation from '@/components/home/Animation';

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
      <Layout>
        <section className="flex min-h-screen flex-col items-center justify-center body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
          </div>
        </section>
      </Layout>
    </>
  );
}
