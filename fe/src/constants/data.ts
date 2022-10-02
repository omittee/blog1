import { nanoid } from "nanoid";
const data = [
  {
    id: nanoid(),
    title: "标题1",
    tags: "aaa bbb ccc",
    content: "小编也不知道呢",
    lastModified: new Date().toDateString()
  },
  {
    id: nanoid(),
    title: "标题2",
    tags: "aaa bbb ccc",
    content: "小编也不知道呢",
    lastModified: new Date().toDateString()
  },
  {
    id: nanoid(),
    title: "标题3",
    tags: "aaa bbb ccc",
    content: "小编也不知道呢",
    lastModified: new Date().toDateString()
  },
  {
    id: nanoid(),
    title: "标题4",
    tags: "aaa bbb ccc",
    content: "小编也不知道呢",
    lastModified: new Date().toDateString()
  },
]
export default data;