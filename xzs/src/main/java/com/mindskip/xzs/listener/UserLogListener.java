package com.mindskip.xzs.listener;

import com.mindskip.xzs.event.UserEvent;
import com.mindskip.xzs.service.UserEventLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

/**
 * @version 3.5.0
 * @description:  The type User log listener.
 * @date 2022/3/12 9:45
 */
@Component
public class UserLogListener implements ApplicationListener<UserEvent> {

    private final UserEventLogService userEventLogService;

    /**
     * Instantiates a new User log listener.
     *
     * @param userEventLogService the user event log service
     */
    @Autowired
    public UserLogListener(UserEventLogService userEventLogService) {
        this.userEventLogService = userEventLogService;
    }

    @Override
    public void onApplicationEvent(UserEvent userEvent) {
        userEventLogService.insertByFilter(userEvent.getUserEventLog());
    }

}
