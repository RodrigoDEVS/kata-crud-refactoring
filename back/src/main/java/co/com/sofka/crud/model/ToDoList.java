package co.com.sofka.crud.model;

import javax.persistence.*;
import java.util.List;

/**
 * Clase de empaquetado de la entidad Todo.
 *
 * @version 2.00.00 2022-05-07
 *
 * @author Rodrigo Gallego - rodrigo.gallego@outlook.es
 *
 * @since 2.00.00 2022-05-07
 *
 */
@Entity
public class ToDoList {

    /**Atributos de la Clase*/
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "todolist", cascade = CascadeType.ALL)
    private List<Todo> todos;

    /**Getters y Setters*/
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