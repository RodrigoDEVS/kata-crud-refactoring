package co.com.sofka.crud.controller;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.service.ToDoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoListController {

    @Autowired
    private ToDoListService toDoListService;

    @GetMapping(value = "api/todolist")
    public List<ToDoListDTO> listar(){
        return toDoListService.listar();
    }

    @PostMapping(value = "api/todolist")
    public ToDoListDTO create(@RequestBody ToDoListDTO todolist){
        return toDoListService.create(todolist);
    }


}
