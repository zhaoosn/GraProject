package com.mindskip.xzs.service;


import com.baomidou.mybatisplus.extension.service.IService;
import com.mindskip.xzs.domain.Comment;

import java.util.List;

public interface CommentService extends IService<Comment> {

    List<Comment> findCommentDetail(Integer articleId);
}
