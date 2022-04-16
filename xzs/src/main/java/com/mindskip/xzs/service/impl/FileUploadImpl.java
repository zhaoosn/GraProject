package com.mindskip.xzs.service.impl;

import com.mindskip.xzs.configuration.property.QnConfig;
import com.mindskip.xzs.configuration.property.SystemConfig;
import com.mindskip.xzs.service.FileUpload;
import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.Region;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InputStream;

@Service
public class FileUploadImpl implements FileUpload {
    private final Logger logger = LoggerFactory.getLogger(FileUpload.class);
    private final SystemConfig systemConfig;


    @Autowired
    public FileUploadImpl(SystemConfig systemConfig) {
        this.systemConfig = systemConfig;
    }

    @Override
    public String uploadFile(InputStream inputStream, long size, String extName) {
        QnConfig qnConfig = systemConfig.getQn();
        /*
        Region对象
            机房	  Region
            华东	  Region.region0(), Region.huadong()
            华北	  Region.region1(), Region.huabei()
            华南	  Region.region2(), Region.huanan()
            北美	  Region.regionNa0(), Region.beimei()
            东南亚 Region.regionAs0(), Region.xinjiapo()
         */
        Configuration cfg = new Configuration(Region.regionAs0());
        UploadManager uploadManager = new UploadManager(cfg);
        Auth auth = Auth.create(qnConfig.getAccessKey(), qnConfig.getSecretKey());
        String upToken = auth.uploadToken(qnConfig.getBucket());
        try {
            Response response = uploadManager.put(inputStream, null, upToken, null, null);
            DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
            return qnConfig.getUrl() + "/" + putRet.key;
        } catch (QiniuException ex) {
            logger.error(ex.getMessage(), ex);
        }
        return null;
    }
}
