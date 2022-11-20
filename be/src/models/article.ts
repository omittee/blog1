import Article from "../schema/article";
import { dataType } from "@fe/shared/types"
const queryArticleByPageNum = async (page: number, pageSize: number) => {
  return await Article.find({}).skip(page * pageSize).limit(pageSize).catch(e => console.log(e));
}

const queryArticleNum = async () => {
  return await Article.count().catch(e => console.log(e));
}

const createOrUpdate = async (info: dataType) => {
  return await Article.findOne({ _id: info._id }).then((res) => {
    if (res) {
      console.log(res, "更新");
      Article.updateOne({ _id: info._id }, info).catch(e => console.log(e));
      return 1;
    }
    else {
      console.log("生成")
      new Article(info).save((e) => {
        if (e) console.log(e);
      });
      return 0;
    }
  }, (e) => console.log(e))
}

const deleteArticle = async (_id: string) => {
  Article.deleteOne({ _id }).catch(e => console.log(e));
}

export default {
  queryArticleByPageNum,
  queryArticleNum,
  createOrUpdate,
  deleteArticle,
}