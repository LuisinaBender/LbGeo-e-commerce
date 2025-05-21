// Spread Operator para objetos y arrays

//Antes 
const numeros = [1, 2, 3];
const numerosNuevos = [4, 5, 6];
const numerosFinal= numerosNuevos.concat(numeros);

//Ahora
const numerosSugar= [...numerosNuevos, ...numeros];

//Destructuring

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

console.log(persona.nombre); // Juan

const {nombre, edad} = persona;

const colores = ['rojo', 'verde', 'azul'];
console.log(colores[0]); // rojo

const [primero, segundo, tercero] = colores;

//Antes 

if (edad >= 18) {
    console.log('Es mayor de edad');
}else {
    console.log('Es menor de edad');
}

//Ahora Operardor ternario

edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

//Ejemplo de uso de destructuring y template string

console.log ('Hola'+ nombre)
console.log (`Hola ${nombre}`) // Template String

