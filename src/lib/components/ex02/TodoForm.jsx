import {useRef} from "react";
import {Button, InputLg} from "./StyledComponents.js";
import PropTypes from "prop-types";

export function TodoForm({onSubmit}) {

    const inputRef = useRef(null);

    return (
        <>
            <h1>TodoMatic</h1>
            <h2>What needs to be done?</h2>
            <InputLg type="text" placeholder="What needs to be done?"
                     ref={inputRef}
                   className={"input__lg"}
            />
            <Button primary
                className={"btn btn__primary"}
                onClick={() => {
                    if (!inputRef.current.value) {
                        return;
                    }

                    onSubmit({
                        id: Date.now(),
                        text: inputRef.current.value,
                        completed: false
                    });
                    inputRef.current.value = '';
                }}
            >Add</Button>
        </>
    );
}

TodoForm.prototype = {
    onSubmit: PropTypes.func.isRequired
};