import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {deposit, withdraw} from "../../reducers/slices/atmSlices.js";

export function AtmInterface() {

    const cash = useSelector(state => state.atm.cash);
    const dispatch = useDispatch();
    const saldoRef = useRef(null);
    const depositar = () => {
        if (saldoRef.current.value < 0) {
            alert("Valor inválido");
            return
        }
        dispatch(deposit(Number(saldoRef.current.value)));
        saldoRef.current.value = '';
    }

    const levantar = () => {
        if (saldoRef.current.value < 0) {
            alert("Saldo insuficiente");
            return
        }
        dispatch(withdraw(Number(saldoRef.current.value)));
        saldoRef.current.value = '';

    }
    return (<>
            <h1>Máquina Multibanco</h1>

            <h2>Saldo Atual: {cash} €</h2>
            <div>
                <input type={"number"} placeholder={"Introduza o valor a levantar"} ref={saldoRef}/>
                <button onClick={() => depositar()}>Depositar</button>
                <button onClick={() => levantar()}>Levantar</button>
            </div>
        </>);

}