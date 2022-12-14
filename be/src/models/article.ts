import Article from "../schema/article";
import { dataType } from "@fe/shared/types"
const queryArticle = async (page: number, pageSize: number, regStr: string) => {
  const reg = new RegExp(regStr, "i");
  return await Article.find({
    $or: [{
      title: reg
    }, {
      tags: reg
    }, {
      content: reg
    }],
  }).skip(page * pageSize).limit(pageSize).select({
    _id: 1,
    title: 1,
    tags: 1,
    abstract: 1,
    lastModified: 1,
  }).sort({
    lastModified: -1
  }).catch(e => console.log(e));
}

const queryContentByID = async (_id: string) => {
  return await Article.findOne({
    _id
  }).select({
    _id:1,
    title:1,
    tags: 1,
    content:1
  }).catch(e=>console.log(e));
}

const queryArticleNum = async (regStr: string) => {
  const reg = new RegExp(regStr, "i");
  return await Article.find({
    $or: [{
      title: reg
    }, {
      tags: reg
    }, {
      content: reg
    }],
  }).count().catch(e => console.log(e));
}

const queryTagsInfo = async () => {
  const tagMap: Map<string, number> = new Map();
  const data = await Article.find({}).catch(e => console.log(e));
  if (data) {
    data.forEach(x => {
      x.tags.trim().split(" ").forEach(t => {
        tagMap.set(t, (tagMap.get(t) ?? 0) + 1);
      })
    })
  }
  return [...tagMap.entries()];
}


const createOrUpdate = async (info: dataType) => {
  return await Article.findOne({ _id: info._id }).then((res) => {
    if (res) {
      Article.updateOne({ _id: info._id }, info).catch(e => console.log(e));
      return 1;
    }
    else {
      new Article(info).save((e) => {
        if (e) console.log(e);
      });
      return 0;
    }
  }, (e) => console.log(e))
}

const deleteArticle = async (_id: string): Promise<boolean> => {
  const res = await Article.findOne({ _id })
  if (!res) return false;
  Article.deleteOne({ _id }).catch(e => console.log(e));
  return true;
}

export default {
  queryArticle,
  queryContentByID,
  queryArticleNum,
  queryTagsInfo,
  createOrUpdate,
  deleteArticle,
}