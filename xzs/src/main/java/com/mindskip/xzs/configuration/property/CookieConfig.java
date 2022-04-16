package com.mindskip.xzs.configuration.property;

/**
 * @version 3.5.0
 * @description:  The type Cookie config.
 * @date 2022/3/12 9:45
 */
public class CookieConfig {

    /**
     * Gets name.
     *
     * @return the name
     */
    public static String getName() {
        return "xzs";
    }

    /**
     * Gets interval.
     *
     * @return the interval
     */
    public static Integer getInterval() {
        return 30 * 24 * 60 * 60;
    }
}
