import Layout from '@/components/Layout';
import Head from 'next/head';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { TOKEN, DATABASE_ID } from '@/config';
import { Notion } from '@/types';
import ProjectItem from '@/components/projects/ProjectItem';

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
        <div className="flex flex-col items-center px-5 mb-10">
          <h1 className="text-4xl font-bold sm:text-6xl">
            총 프로젝트:
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
            {projects.results.map((project) => (
              <ProjectItem key={project.id} data={project} />
            ))}
          </div>
        </div>
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
