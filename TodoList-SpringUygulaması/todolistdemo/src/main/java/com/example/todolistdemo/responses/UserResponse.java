package com.example.todolistdemo.responses;

import com.example.todolistdemo.entity.User;

public class UserResponse {
    Long id;
    String username;

    public UserResponse(User entity){
        this.id = entity.getId();
        this.username = entity.getUsername();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }
}
