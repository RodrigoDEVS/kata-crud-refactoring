package co.com.sofka.crud.service;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.repository.ToDoListRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoListService {

    @Autowired
    ToDoListRepository toDoListRepo;

    @Autowired
    private ModelMapper modelMapper;


    public ToDoListDTO create(ToDoListDTO todolist){
        ToDoList todolistEntity = modelMapper.map(todolist, ToDoList.class);
        todolistEntity = toDoListRepo.save(todolistEntity);
        return modelMapper.map(todolistEntity, ToDoListDTO.class);
    }
}
