import { post, get, deleteReq } from '@/utils/request'

export default {
  index: () => post('/api/student/article/index'),
  delete: (id) => get("/api/article/" + id),
  articlePage: (params) => get("/api/sudent/article/page", params = { ...params}),
  deleleBatch: (ids) => post("/article/del/batch", ids),
  saveArticle: (params) => post("/article", params),
  updateArticle: (params) => post("/article/update", params),
  articleDetial: (id) => get("/article/" + id),
  commentTree: (id) => get("/comment/tree/" + id),
  comment: (params) => post("/comment", params),
  deleteComment: (id) => deleteReq("/comment/" + id)
}
