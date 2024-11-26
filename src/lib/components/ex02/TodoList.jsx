import {Button} from "./StyledComponents.js";
import PropTypes from "prop-types";

export function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                    <Button danger onClick={() => deleteTodo(todo.id)} className={"btn btn__danger"}>Delete</Button>
                    <Button primary onClick={() => toggleTodo(todo.id)} className={"btn btn__primary"}>Toggle</Button>
                </li>
            ))}
        </ul>
    );
}

TodoList.prototype = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};