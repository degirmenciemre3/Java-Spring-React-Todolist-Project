package com.example.todolistdemo;

import com.example.todolistdemo.entity.Todo;
import com.example.todolistdemo.entity.User;
import com.example.todolistdemo.repository.TodoRepository;
import com.example.todolistdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodolistdemoApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private TodoRepository todoRepository;


	public static void main(String[] args) {
		SpringApplication.run(TodolistdemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
