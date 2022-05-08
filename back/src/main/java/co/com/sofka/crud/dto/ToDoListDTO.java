package co.com.sofka.crud.dto;

import co.com.sofka.crud.model.Todo;

import java.io.Serializable;
import java.util.List;

/**
 * Clase DTO que será la encargada de la transferencia de datos cliente-servidor.
 *
 * @version 2.00.00 2022-05-07
 *
 * @author Rodrigo Gallego - rodrigo.gallego@outlook.es
 *
 * @since 2.00.00 2022-05-07
 *
 */
public class ToDoListDTO implements Serializable {

    private static final Long serialVersionUID = 1L;
    private Integer id;
    private String name;
    private List<Todo> todos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Todo> getTodos() {
        return todos;
    }

    public void setTodos(List<Todo> todos) {
        this.todos = todos;
    }
}
