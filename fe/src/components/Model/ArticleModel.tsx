import { useContext, useState } from "react";
import HOC from "./Model";
import { showModelProps } from "@/shared/types";
import { createOrUpdate } from "@/network/request";
import { ArticleContext } from "@/GlobalContext/globalContext";
import "@/assets/CSS/Model/articleModel.scss";
import { nanoid } from "nanoid";
function ArticleModel(props: showModelProps) {
  const [title, setTitle] = useState(props.data?.title ?? "");
  const [tags, setTags] = useState(props.data?.tags ?? "");
  const [content, setContent] = useState(props.data?.content ?? "");
  const { initAndRefresh } = useContext(ArticleContext);
  async function confirm() {
    if (title.length && tags.length && content.length) props.setShow();
    else {
      alert("请完善文章信息！");
      return;
    }
    const data = {
      _id: props.data?._id ?? nanoid(),
      title,
      tags,
      abstract: content.slice(0, 100) + "...",
      content,
      lastModified: new Date().getTime(),
    };
    const res = await createOrUpdate(data);
    if (res) {
      alert("发布更新成功！");
      initAndRefresh();
      props.setArticle?.({
        _id: data._id,
        title: data.title,
        tags: data.tags,
        content: data.content,
      });
    }
  }
  return (
    <div data-component="ArticleModel">
      <div className="inputBox box1">
        <input
          type="text"
          className="titleInput"
          placeholder="请输入标题"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="inputBox box1">
        <input
          type="text"
          className="tagInput"
          placeholder="请输入标签"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="inputBox box2">
        <textarea
          name=""
          id=""
          className="content"
          placeholder="请输入文章内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="confirm" onClick={confirm}>
        确定
      </div>
    </div>
  );
}
export default HOC(ArticleModel);
