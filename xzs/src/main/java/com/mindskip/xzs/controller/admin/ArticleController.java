package com.mindskip.xzs.controller.admin;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.mindskip.xzs.base.BaseApiController;
import com.mindskip.xzs.base.RestResponse;
import com.mindskip.xzs.domain.Article;
import com.mindskip.xzs.service.IArticleService;
import com.mindskip.xzs.utility.DateTimeUtil;
import com.mindskip.xzs.utility.TokenUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zhaoosn
 * @since 2022-04-15
 */
@RestController("AdminArticleController")
@RequestMapping(value = "/api/admin/article")
public class ArticleController extends BaseApiController {


    @Resource
    private IArticleService articleService;

    // 新增或者更新
    @PostMapping
    public RestResponse save(@RequestBody Article article) {
        if (article.getId() == null) { // 新增
            article.setTime(DateTimeUtil.dateFormat(new Date()));  // new Date()
            article.setUser(TokenUtils.getCurrentUser().getUserName());
        }
        articleService.saveOrUpdate(article);
        return RestResponse.ok();
    }

    @DeleteMapping("/{id}")
    public RestResponse delete(@PathVariable Integer id) {
        articleService.removeById(id);
        return RestResponse.ok();
    }

    @PostMapping("/del/batch")
    public RestResponse deleteBatch(@RequestBody List<Integer> ids) {
        articleService.removeByIds(ids);
        return RestResponse.ok();
    }

    @GetMapping
    public RestResponse findAll() {
        return RestResponse.ok(articleService.list());
    }

    @GetMapping("/{id}")
    public RestResponse findOne(@PathVariable Integer id) {
        return RestResponse.ok(articleService.getById(id));
    }

    @GetMapping("/page")
    public RestResponse findPage(@RequestParam String name,
                           @RequestParam Integer pageNum,
                           @RequestParam Integer pageSize) {
        QueryWrapper<Article> queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("id");
        if (StringUtils.isNotBlank(name)) {
            queryWrapper.like("name", name);
        }
        return RestResponse.ok(articleService.page(new Page<>(pageNum, pageSize), queryWrapper));
    }

}
