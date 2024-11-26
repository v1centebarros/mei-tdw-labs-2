
import {Provider} from "react-redux";
import store from "../../lib/catStore.js";
import {CatList} from "../../lib/components/ex06/CatList.jsx";

export default function Ex06() {

    return (
        <Provider store={store}>
            <CatList/>
        </Provider>
    );
}