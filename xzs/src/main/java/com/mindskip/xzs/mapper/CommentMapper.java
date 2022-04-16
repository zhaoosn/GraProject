package com.mindskip.xzs.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.mindskip.xzs.domain.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zhaoosn
 * @since 2022-03-22
 */
@Mapper
public interface CommentMapper extends BaseMapper<Comment> {

    @Select("select c.*,u.real_name,u.image_path from t_comment c left join t_user u on c.user_id = u.id " +
            "where c.article_id = #{articleId} order by id desc")
    List<Comment> findCommentDetail(@Param("articleId") Integer articleId);

}