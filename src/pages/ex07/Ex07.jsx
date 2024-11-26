import {Provider} from "react-redux";
import CatList from "../../lib/components/ex07/CatList.jsx";
import apiStore from "../../lib/api/apiStore.js";

export default function Ex07() {
    return (
        <Provider store={apiStore}>
            <CatList/>
        </Provider>
    );
}