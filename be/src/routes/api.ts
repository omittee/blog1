import article from '../controllers/article'
import login from "../controllers/login"
import router from 'koa-router'
import koaJwt from 'koa-jwt'

const r = new router();
r.get('/getArticle', article.getArticle)
  .get('/getContentByID', article.getContentByID)
  .get('/getArticleNum', article.getArticleNum)
  .get('/getTagsInfo', article.getTagsInfo)
  .post('/login', login)
  .use(koaJwt({ secret: process.env.JWT_SECRET_KEY }))
  .delete('/deleteArticle', article.deleteArticle)
  .post('/createOrUpdate', article.createOrUpdate);


export default r;