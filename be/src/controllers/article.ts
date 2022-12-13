import { Context } from "koa";
import article from "../models/article";
const getArticle = async (ctx: Context) => {
  // const { page, pageSize } = ctx.query;
  let page, pageSize;
  if (isNaN(+ctx.query.page)) page = 0;
  else page = +ctx.query.page;
  if (isNaN(+ctx.query.pageSize)) pageSize = 10;
  else pageSize = +ctx.query.pageSize;
  const regStr = (ctx.query.regStr ?? "") as string;
  const result = await article.queryArticle(page, pageSize, regStr);
  ctx.body = result;
}

const getContentByID = async (ctx:Context) => {
  const _id = ctx.query._id as string;
  const result = await article.queryContentByID(_id);
  if(result)
    ctx.body = {
    status: 200,
    msg: "获取内容成功！",
    data: result
  }
  else ctx.body = {
    status: 404,
    msg: "找不到相应内容",
  }
}

const getArticleNum = async (ctx: Context) => {
  const regStr = (ctx.query.regStr ?? "") as string;
  const result = await article.queryArticleNum(regStr);
  ctx.body = {
    status: 200,
    msg: "获取文章数成功",
    data: result
  }
}
const getTagsInfo = async (ctx: Context) => {
  const result = await article.queryTagsInfo();
  ctx.body = {
    status: 200,
    msg: "获取tags成功",
    data: result
  }

}

const createOrUpdate = async (ctx: Context) => {
  const data = ctx.request.body;
  console.log(data);
  const sign = await article.createOrUpdate(data)
  ctx.body = {
    status: 200,
    msg: sign ? "更新成功！" : "创建成功！"
  }
}

const deleteArticle = async (ctx: Context) => {
  const data = ctx.query.id as string;
  const result = await article.deleteArticle(data);
  ctx.body = {
    status: result ? 200 : 404,
    msg: result ? "删除成功！" : "目标文章不存在！"
  }
}

export default {
  getArticle,
  getContentByID,
  getArticleNum,
  getTagsInfo,
  createOrUpdate,
  deleteArticle
}