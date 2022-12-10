export interface dataType {
  _id: string;
  title: string;
  tags: string;
  content: string;
  lastModified: string;
}
export interface ArticleCardProps {
  article: dataType;
  index: number;
}
export interface showModelProps {
  isShow: boolean
  setShow: () => void
  data?: dataType
  setLogin?: ()=>void
}