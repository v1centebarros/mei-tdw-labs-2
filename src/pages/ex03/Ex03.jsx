import Task from "../../lib/components/ex03/Task.jsx";
import TaskList from "../../lib/components/ex03/TaskList.jsx";
import store from "../../lib/store.js";
import {Provider} from "react-redux";

export function Ex03() {

    return (
        <Provider store={store}>
            <Task/>
            <TaskList/>
        </Provider>
    )
}