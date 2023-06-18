import { Notion } from '@/types';
import Image from 'next/image';

interface Props {
  data: Notion.Page;
}

export default function ProjectItem({ data }: Props) {
  const title =
    data.properties.이름.title && data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const description =
    data.properties.설명.rich_text &&
    data.properties.설명.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.기술.multi_select;
  const start = data.properties.날짜.date.start;
  const end = data.properties.날짜.date.end;

  return (
    <div className="project-card overflow-hidden">
      <div className="h-80 relative " key={imgSrc}>
        <Image src={imgSrc} alt="cover" fill sizes="580px" />
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3>{description}</h3>
        <a href={github} target="_blank">
          깃허브 링크
        </a>
        <h3 className="mt-4 text-xl">
          작업기간: {start} ~ {end}
        </h3>
        <div className="flex items-start mt-2">
          {tags &&
            tags.map((tag) => (
              <h1
                key={tag.id}
                className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700"
              >
                {tag.name}
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
}
