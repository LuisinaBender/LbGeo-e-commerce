//Hock de React que permite añadir estado a un componente funcional
import {useState} from 'react';
// import React from 'react';

const Contador = () => {
//La función useState devuelve un array con dos elementos, el primero es el valor del estado y el segundo es una función para actualizarlo
    const [count, setCount]= useState(1);

//Se crea una función que se ejecuta al hacer click en el botón, en este caso se llama sumar
//El valor del estado se actualiza con la función setCount, que recibe el nuevo valor del estado
    const sumar = () => {
        setCount(count + 1);
    }

//Se crea una función que se ejecuta al hacer click en el botón, en este caso se llama restar
//El valor del estado se actualiza con la función setCount, que recibe el nuevo valor del estado
    const restar = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={sumar}>+</button>
            <span>{count}</span>
            <button onClick={restar}>-</button>
        </div>
    );
}

export default Contador;