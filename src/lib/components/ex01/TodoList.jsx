export function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)} className={"btn btn__danger"}>Delete</button>
                    <button onClick={() => toggleTodo(todo.id)} className={"btn btn__primary"}>Toggle</button>
                </li>
            ))}
        </ul>
    );
}