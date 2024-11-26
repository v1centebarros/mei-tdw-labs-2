import Task from "../../lib/components/ex03/Task.jsx";
import TaskList from "../../lib/components/ex03/TaskList.jsx";
import {Provider} from "react-redux";
import storeEx03 from "../../lib/storeEx03.js";

export function Ex04() {

    return (
        <Provider store={storeEx03}>
            <Task/>
            <TaskList/>
        </Provider>
    )
}