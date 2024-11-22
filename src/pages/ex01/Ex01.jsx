import "./ex01.css";
import {TodoForm} from "../../lib/components/ex01/TodoForm.jsx";
import {useEffect, useState} from "react";
import {TodoListFilter} from "../../lib/components/ex01/TodoListFilter.jsx";
import {TodoList} from "../../lib/components/ex01/TodoList.jsx";
import {TodoSearchBar} from "../../lib/components/ex01/TodoSearchBar.jsx";
import localforage from "localforage";

export function Ex01() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState(todos);

    useEffect(() => {
        localforage.getItem("todos").then((storedTodos) => {
            if (storedTodos) {
                setTodos(storedTodos);
            }
        });
    }, []);

    useEffect(() => {
        localforage.setItem("todos", todos);
        setFilteredTodos(todos);
    }, [todos]);

    const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));
    const toggleTodo = (id) => setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    const filterTodos = (filter) => {
        switch (filter) {
            case "active":
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            default:
                setFilteredTodos(todos);
        }
        setFilter(filter);
    }
    const searchTodos = (search) => setFilteredTodos(todos.filter(todo => todo.text.includes(search)));

    return (
        <div className={"todoapp"}>
            <TodoForm onSubmit={(todo) => setTodos([...todos, todo])}/>
            <TodoListFilter updateFilter={filterTodos}/>
            <TodoSearchBar searchTodos={searchTodos}/>
            <TodoList todos={filteredTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </div>
    );
}