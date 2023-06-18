export declare namespace Notion {
  type ResultsType =
    | 'block'
    | 'comment'
    | 'database'
    | 'page'
    | 'database'
    | 'property_item'
    | 'user';
  type CustomProperties = '이름' | '기술' | 'Github' | '날짜' | '설명';
  type Properties<T> = {
    [key in CustomProperties]: T;
  };

  interface PageCover {
    type: 'external';
    external: { url: string };
  }
  interface RichText {
    type: string;
    text: object;
    annotations: object;
    plain_text: string;
    href: string;
  }
  interface MultiSelect {
    color: string;
    id: string;
    name: string;
  }
  interface PageProperties {
    id: string;
    type: string;
    [key: string]: any;
    title?: RichText[];
    rich_text?: RichText[];
    multi_select?: MultiSelect[];
  }
  interface Page {
    object: string;
    id: string;
    created_time: string;
    created_by: object;
    last_edited_time: string;
    last_edited_by: object;
    archived: boolean;
    icon: object;
    cover: PageCover;
    properties: Properties<PageProperties>;
    parent: object;
    url;
  }
  interface DatabaseProperties {
    id: string;
    type: string;
    [key: string]: any;
  }
  interface Database {
    object: string;
    id: string;
    created_time: string;
    created_by: object;
    last_edited_time: string;
    last_edited_by: object;
    title: { [key: string]: object[] };
    description: object[];
    icon: object;
    cover: object;
    properties: Properties<DatabaseProperties>;
    parent: object;
    url: string;
    archived: boolean;
    is_inline: boolean;
  }

  interface Responses<T = Page> {
    has_more: boolean;
    next_cursor: string;
    object: 'list';
    results: T[];
    type: ResultsType;
    page: object;
  }
}
