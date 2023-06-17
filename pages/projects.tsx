import Layout from '@/components/Layout';
import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { TOKEN, DATABASE_ID } from '@/config';
import { Notion } from '@/types';

export default function projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(projects);

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
        <h1>총 프로젝트: {projects.results.length}</h1>

        {projects.results.map((project, i) => (
          <h1 key={i}>
            {project.properties.이름.title &&
              project.properties.이름.title[0].plain_text}
          </h1>
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: Notion.Responses;
}> = async () => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects: Notion.Responses = await res.json();

  return { props: { projects } };
};
