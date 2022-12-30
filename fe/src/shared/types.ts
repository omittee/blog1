export interface dataType {
  _id: string;
  title: string;
  tags: string;
  abstract: string;
  lastModified: number;
}
export interface detailDataType extends dataType {
  content: string;
}
export interface modifyDataType {
  _id: string;
  title: string;
  tags: string;
  content: string;
}
export type tagType = [string, number];

export interface ArticleCardProps {
  article: dataType;
  index: number;
}
export interface ArticleListProps {
  articles: dataType[];
}
export interface showModelProps {
  isShow: boolean;
  setShow: () => void;
  data?: modifyDataType;
  setArticle?: (res: modifyDataType) => void;
}
export interface loginProps {
  pwd: string;
}
export interface ButtonProps {
  data: modifyDataType;
  setArticle: (res: modifyDataType)=>void;
}