import { post } from '@/utils/request'

export default {
  index: () => post('/api/admin/article/index'),
  articlePage: (params) => get("/article/page", params = { ...params}),
  updateArticle: (params) => post("/article/update", params),
  delete: (id) => get("/api/article/" + id),
  deleleBatch: (ids) => post("/article/del/batch", ids),
  saveArticle: (params) => post("/article", params),
}
