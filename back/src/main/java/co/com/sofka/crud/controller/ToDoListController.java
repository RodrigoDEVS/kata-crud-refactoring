package co.com.sofka.crud.controller;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.model.Todo;
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

    @PutMapping(value = "api/todolist")
    public ToDoListDTO update(@RequestBody ToDoListDTO todolist){
        if(todolist.getId() != null){
            return toDoListService.create(todolist);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @GetMapping(value = "api/{id}/todolist")
    public ToDoListDTO get(@PathVariable("id") Long id){
        return toDoListService.get(id);
    }

    @DeleteMapping(value = "api/{id}/todolist")
    public void delete(@PathVariable("id")Long id){
        toDoListService.delete(id);
    }
}
