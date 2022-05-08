package co.com.sofka.crud.service;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.repository.ToDoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoListService {

    @Autowired
    ToDoListRepository repository;

    public ToDoListDTO save(ToDoListDTO todolist){
        return repository.save(todolist);
    }
}
