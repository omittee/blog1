import article from '../controllers/article'
import router from 'koa-router'
const r = new router();
r.get('/article/getArticleByPageNum', article.getArticleByPageNum);
r.get('/article/getArticleNum', article.getArticleNum);
r.delete('/article/deleteArticle', article.deleteArticle)
r.post('/article/createOrUpdate', article.createOrUpdate);


export default r;