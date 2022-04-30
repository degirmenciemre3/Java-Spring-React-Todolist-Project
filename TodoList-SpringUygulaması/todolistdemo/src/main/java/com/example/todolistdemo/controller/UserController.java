package com.example.todolistdemo.controller;

import com.example.todolistdemo.entity.Todo;
import com.example.todolistdemo.entity.User;
import com.example.todolistdemo.repository.TodoRepository;
import com.example.todolistdemo.repository.UserRepository;
import com.example.todolistdemo.request.AddTodoRequest;
import com.example.todolistdemo.request.AddUserRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserRepository userRepository;
    private TodoRepository todoRepository;

    public UserController(UserRepository userRepository, TodoRepository todoRepository) {
        this.userRepository = userRepository;
        this.todoRepository = todoRepository;
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId){
        return userRepository.findById(userId).orElseThrow(() -> new NoSuchElementException());
    }

    @GetMapping("/{userId}/alltodos")
    public List<Todo > getUserByIdTodos(@PathVariable Long userId){
        User todosUser = new User();
        todosUser = userRepository.findById(userId).orElseThrow(() -> new NoSuchElementException());
        return todosUser.getTodoList();
    }

    @PostMapping
    public User addUser(@RequestBody AddUserRequest userRequest){
        User user = new User();
        user.setUsername(userRequest.getUsername());
        user.setPassword(userRequest.getPassword());
        return userRepository.save(user);
    }
    @PostMapping("/{userId}/todos")
    public void addTodo(@PathVariable Long userId, @RequestBody AddTodoRequest todoRequest){
        User user = userRepository.findById(userId).orElseThrow(()-> new NoSuchElementException());
        Todo todo = new Todo();
        todo.setContent(todoRequest.getContent());
        user.getTodoList().add(todo);
        todoRepository.save(todo);
        userRepository.save(user);
    }
    @PostMapping("/todos/{todoId}")
    public void toggleTodoCompleted(@PathVariable Long todoId){
        Todo todo = todoRepository.findById(todoId).orElseThrow(()-> new NoSuchElementException());
        todo.setCompleted(!todo.getCompleted());
        todoRepository.save(todo);
    }
    @DeleteMapping("{userId}/todos/{todoId}")
    public void deleteTodo(@PathVariable Long userId,@PathVariable Long todoId){
        User user = userRepository.findById(userId).orElseThrow(()-> new NoSuchElementException());
        Todo todo = todoRepository.findById(todoId).orElseThrow(()-> new NoSuchElementException());
        user.getTodoList().remove(todo);
        todoRepository.delete(todo);
    }
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId){
        User user = userRepository.findById(userId).orElseThrow(()-> new NoSuchElementException());
        userRepository.delete(user);
    }
}
