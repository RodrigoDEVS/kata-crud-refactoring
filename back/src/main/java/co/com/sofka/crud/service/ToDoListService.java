package co.com.sofka.crud.service;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.model.ToDoList;
import co.com.sofka.crud.repository.ToDoListRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public List<ToDoListDTO> listar(){
        List<ToDoList> todolistEntity = (List<ToDoList>) toDoListRepo.findAll();
        List<ToDoListDTO> toDoListDTOSet = new ArrayList<>();
        for(ToDoList todolist: todolistEntity){
            ToDoListDTO toDoListDTO = modelMapper.map(todolist, ToDoListDTO.class);
            toDoListDTOSet.add(toDoListDTO);
        }
        return toDoListDTOSet;
    }

    public ToDoListDTO get(Long id) {
        ToDoList todolistEntity = toDoListRepo.findById(id).orElseThrow();
        ToDoListDTO toDoListDTO = modelMapper.map(todolistEntity, ToDoListDTO.class);
        return toDoListDTO;
    }

  /*
    public void delete(Long id){
        toDoListRepo.delete(get(id));
    }
}*/


}
