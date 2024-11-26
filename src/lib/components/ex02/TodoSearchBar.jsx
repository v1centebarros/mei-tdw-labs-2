import PropTypes from "prop-types";

export function TodoSearchBar({searchTodos}) {
    return (
        <div>
            <input type={"text"} placeholder={"Search..."} onChange={(e) => searchTodos(e.target.value)}/>
        </div>
    );
}

TodoSearchBar.prototype = {
    searchTodos: PropTypes.func.isRequired
};