import article from '../controllers/article'
import router from 'koa-router'
import koaJwt from 'koa-jwt'
import secretKey from '../config/jwt'

const r = new router();
r.get('/getArticle', article.getArticle)
  .get('/getArticleNum', article.getArticleNum)
  .get('/getTagsInfo', article.getTagsInfo)
  .post('/login')
  .use(koaJwt(secretKey))
  .delete('/deleteArticle', article.deleteArticle)
  .post('/createOrUpdate', article.createOrUpdate);


export default r;