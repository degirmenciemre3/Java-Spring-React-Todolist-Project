package com.example.todolistdemo.repository;

import com.example.todolistdemo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByusername(String username);
}
