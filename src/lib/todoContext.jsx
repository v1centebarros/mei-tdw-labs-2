import {createContext, useContext} from "react";
import PropTypes from "prop-types";
import localforage from "localforage";

const TodoContext = createContext(
    {
        todos: [],
        addTodo: () => {},
        removeTodo: () => {},
        searchTodos: () => {},
    }
);

export function TodoProvider({children}) {
    //use localforage to persist the todos

    const addTodo = (todo) => {
        localforage.getItem("todos").then((storedTodos) => {
            if (storedTodos) {
                localforage.setItem("todos", [...storedTodos, todo]);
            } else {
                localforage.setItem("todos", [todo]);
            }
        }
        );
    }

    const removeTodo = (id) => {
        localforage.getItem("todos").then((storedTodos) => {
            localforage.setItem("todos", storedTodos.filter(todo => todo.id !== id));
        });
    }

    const searchTodos = (search) => {
        localforage.getItem("todos").then((storedTodos) => {
            localforage.setItem("todos", storedTodos.filter(todo => todo.text.includes(search)));
        });
    }

    return (
        <TodoContext.Provider value={{todos: [], addTodo, removeTodo, searchTodos}}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodoContext = () => useContext(TodoContext);

TodoProvider.prototype = {
    children: PropTypes.node.isRequired
};
