// Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica de cálculo; tiene que hacer un par de ejercicios de matemática que incluyen suma, resta, división y multiplicación. Realizar esto con una calculadora puede ser mucho mas efectivo

const suma = (a,b) => console.log(parseFloat(a)+parseFloat(b))
const resta = (a,b) => console.log(parseFloat(a)-parseFloat(b))
const multiplicacion = (a,b) => console.log(parseFloat(a)*parseFloat(b))
const division = (a,b) => console.log(parseFloat(a)/parseFloat(b))


let selectOption = parseInt(prompt('Elije una opcion\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division'))

let num1 = parseFloat(prompt('Primer numero'))
let num2 = parseFloat(prompt('Primer numero'))

if(selectOption == 1) suma(num1, num2)
else if(selectOption == 2) resta(num1, num2)
else if(selectOption == 3) multiplicacion(num1, num2)
else if(selectOption == 4) division(num1, num2)
else alert('Vaya... Ha ocurrido un error')