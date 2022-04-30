package com.example.todolistdemo.repository;

import com.example.todolistdemo.entity.Todo;
import com.example.todolistdemo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Long> {
}
