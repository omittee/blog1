import Koa from 'koa'
import Router from 'koa-router'
import json from 'koa-json'
import logger from 'koa-logger'
import body, { HttpMethodEnum } from 'koa-body'
import { connectDB } from './config/mongo'
// import auth from './server/routes/auth'
import api from './routes/api'
connectDB();
const app = new Koa();
const r = new Router()
app.use(json());
app.use(logger());
app.use(body({
  // json:true,
  multipart: true,
  parsedMethods: [HttpMethodEnum.POST, HttpMethodEnum.PUT, HttpMethodEnum.PATCH, HttpMethodEnum.GET, HttpMethodEnum.HEAD, HttpMethodEnum.DELETE],
}));

app.use(async function (ctx, next) {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err instanceof Koa.HttpError) {
      console.log(ctx.header);

      if (err.status === 401) {
        ctx.status = 401
        ctx.body = {
          status: 401,
          message: '请求未授权'
        }
      } else {
        throw err
      }
    } else {
      throw err
    }
  }
})
app.on('error', function (err) {
  console.log('server error', err);
});

// r.use('/auth', auth.routes());
r.use('/api', api.routes());

app.use(r.routes())
app.use(r.allowedMethods())
app.listen(3000, () => {
  console.log('Koa is listening in 3000');
});

export default app