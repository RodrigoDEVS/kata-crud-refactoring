package co.com.sofka.crud.controller;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoListController {

    @Autowired
    private ToDoListService toDoListService;

    @PostMapping(value = "api/todolist")
    public ToDoListDTO create(@RequestBody ToDoListDTO todolist){
        return toDoListService.create(todolist);
    }


}
