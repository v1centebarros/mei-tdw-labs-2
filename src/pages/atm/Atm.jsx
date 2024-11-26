import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import AtmReducer from "../../lib/reducers/slices/atmSlices.js";
import {AtmInterface} from "../../lib/components/atm/AtmInterface.jsx";

const store = configureStore({
    reducer: {
        atm: AtmReducer,
    },
});

export function Atm() {

    return (<Provider store={store}>
            <AtmInterface/>
        </Provider>
    )

}