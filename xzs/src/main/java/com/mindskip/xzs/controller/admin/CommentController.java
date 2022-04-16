package com.mindskip.xzs.controller.admin;

import cn.hutool.core.date.DateUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.context.WebContext;
import com.mindskip.xzs.domain.Comment;
import com.mindskip.xzs.service.CommentService;
import com.mindskip.xzs.utility.TokenUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController("AdminCommentController")
@RequestMapping(value = "/api/admin/comment")
public class CommentController {

    @Resource
    private CommentService commentService;

    // 新增或者更新
    @PostMapping
    public RestResponse save(@RequestBody Comment comment) {
        if (comment.getId() == null) { // 新增评论
            comment.setUserId(TokenUtils.getCurrentUser().getId());
            comment.setTime(DateUtil.now());

            if (comment.getPid() != null) {  // 判断如果是回复，进行处理
                Integer pid = comment.getPid();
                Comment pComment = commentService.getById(pid);
                if (pComment.getOriginId() != null) {  // 如果当前回复的父级有祖宗，那么就设置相同的祖宗
                    comment.setOriginId(pComment.getOriginId());
                } else {  // 否则就设置父级为当前回复的祖宗
                    comment.setOriginId(comment.getPid());
                }
            }

        }
        commentService.saveOrUpdate(comment);
        return RestResponse.ok();
    }

    @DeleteMapping("/{id}")
    public RestResponse delete(@PathVariable Integer id) {
        commentService.removeById(id);
        return RestResponse.ok();
    }

    @PostMapping("/del/batch")
    public RestResponse deleteBatch(@RequestBody List<Integer> ids) {
        commentService.removeByIds(ids);
        return RestResponse.ok();
    }

    @GetMapping
    public RestResponse findAll() {
        return RestResponse.ok(commentService.list());
    }

    @GetMapping("/tree/{articleId}")
    public RestResponse findTree(@PathVariable Integer articleId) {
        List<Comment> articleComments = commentService.findCommentDetail(articleId);  // 查询所有的评论和回复数据
        // 查询评论数据（不包括回复）
        List<Comment> originList = articleComments.stream().filter(comment -> comment.getOriginId() == null).collect(Collectors.toList());

        // 设置评论数据的子节点，也就是回复内容
        for (Comment origin : originList) {
            List<Comment> comments = articleComments.stream().filter(comment -> origin.getId().equals(comment.getOriginId())).collect(Collectors.toList());  // 表示回复对象集合
            comments.forEach(comment -> {
                Optional<Comment> pComment = articleComments.stream().filter(c1 -> c1.getId().equals(comment.getPid())).findFirst();  // 找到当前评论的父级
                pComment.ifPresent((v -> {  // 找到父级评论的用户id和用户昵称，并设置给当前的回复对象
                    comment.setPUserId(v.getUserId());
                    comment.setRealName(v.getRealName());
                }));
            });
            origin.setChildren(comments);
        }
        return RestResponse.ok(originList);
    }

    @GetMapping("/{id}")
    public RestResponse findOne(@PathVariable Integer id) {
        return RestResponse.ok(commentService.getById(id));
    }

    @GetMapping("/page")
    public RestResponse findPage(@RequestParam Integer pageNum,
                           @RequestParam Integer pageSize) {
        QueryWrapper<Comment> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("id");
        return RestResponse.ok(commentService.page(new Page<>(pageNum, pageSize), queryWrapper));
    }

}