package co.com.sofka.crud.repository;

import co.com.sofka.crud.dto.ToDoListDTO;
import co.com.sofka.crud.model.ToDoList;
import org.springframework.data.repository.CrudRepository;

public interface ToDoListRepository extends CrudRepository<ToDoList, Long> {
}
