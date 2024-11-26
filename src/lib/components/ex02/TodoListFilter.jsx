import PropTypes from "prop-types";

export function TodoListFilter({updateFilter}) {
    return (
        <div>
            <button onClick={() => updateFilter("all")} className={"btn"}>All</button>
            <button onClick={() => updateFilter("active")} className={"btn"}>Active</button>
            <button onClick={() => updateFilter("completed")} className={"btn"}>Completed</button>
        </div>
    );
}

TodoListFilter.prototype = {
    updateFilter: PropTypes.func.isRequired
};