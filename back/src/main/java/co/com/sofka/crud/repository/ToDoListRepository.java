package co.com.sofka.crud.repository;

import co.com.sofka.crud.dto.ToDoListDTO;
import org.springframework.data.repository.CrudRepository;

public interface ToDoListRepository extends CrudRepository<ToDoListDTO, Integer> {
}
