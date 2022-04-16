package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.domain.Article;
import com.mindskip.xzs.mapper.ArticleMapper;
import com.mindskip.xzs.service.IArticleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zhaoosn
 * @since 2022-04-15
 */
@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, Article> implements IArticleService {

}
