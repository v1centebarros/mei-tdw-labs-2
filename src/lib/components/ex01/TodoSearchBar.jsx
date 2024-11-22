export function TodoSearchBar({searchTodos}) {
    return (
        <div>
            <input type={"text"} placeholder={"Search..."} onChange={(e) => searchTodos(e.target.value)}/>
        </div>
    );
}