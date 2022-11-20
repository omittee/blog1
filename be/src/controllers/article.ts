import { Context } from "koa";
import article from "../models/article";
const getArticleByPageNum = async (ctx: Context) => {
  // const { page, pageSize } = ctx.query;
  let page, pageSize;
  if(isNaN(+ctx.query.page)) page = 0;
  else page = +ctx.query.page;
  if (isNaN(+ctx.query.pageSize)) pageSize = 10;
  else pageSize = +ctx.query.pageSize;

  const result = await article.queryArticleByPageNum(page, pageSize);
  ctx.body = result;
}

const getArticleNum = async (ctx: Context) => {
  const result = await article.queryArticleNum();
  ctx.body = {
    status: 200,
    msg: "获取成功",
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

const deleteArticle =async (ctx:Context) => {
  const data = ctx.request.body;
  await article.deleteArticle(data);
  ctx.body = {
    status: 200,
    msg: "删除成功！"
  }
}

export default {
  getArticleByPageNum,
  getArticleNum,
  createOrUpdate,
  deleteArticle
}