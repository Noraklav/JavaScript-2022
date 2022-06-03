const root2 = document.querySelector('.rootMath')
const draw = str =>{let div = document.createElement('div');div.innerHTML = str;root2.appendChild(div);}
let numbers = [734,425,530,896,570,276,15,413,70,655,972,54,26,305];

let h2 = document.createElement('h2')
h2.innerHTML = 'Modulo Math'
root2.appendChild(h2)

// @Metodos
draw('<b>Metodos</b>')
// sqrt - Raiz cuadrada
draw(`sqrt: ${Math.sqrt(numbers[2])}`);

// cbrt - Raiz cubica
draw(`cbrt: ${Math.cbrt(numbers[5])}`);

// max - Devuelve el numero mas grande
draw(`max: ${Math.max(...numbers)}`)

// min - Devuelve el numero mas chico
draw(`min: ${Math.min(...numbers)}`)

// random - Devuelve un numero aleatorio
draw(`random: ${Math.random()*100}`)

// round - Devuelve el valor redondeado del entero mas cercano
draw(`round: ${Math.round(5.4)}`)

// fround - Devuelve la representación flotante de precisión simple de 32 bits más cercana de un número
draw(`fround: ${Math.fround(5.33)}`)

// floor - Devuelve el entero mayor o igual a un numero
draw(`floor: ${Math.floor(5.01)}`) //5
// draw(`floor: ${Math.floor(5.99)}`) //5

// trunc - Devuelve el entero y elimina los fraccionarios
draw(`trunc: ${Math.trunc(Math.sqrt(numbers[5]))}`)

// @Propiedades
draw('<br><b>Propiedades</b>')
// PI - Numero PI
draw(`PI: ${Math.PI}`)

// SQRT1_2 - Raiz cuadrada de 1/2
draw(`SQRT1_2: ${Math.SQRT1_2}`)

// SQRT2 - Raiz cuadrada 2
draw(`SQRT2: ${Math.SQRT2}`)

draw('<br><b>Logaritmos</b>')
// Constante de Euler
draw(`E (Euler): ${Math.E}`)

// LN2 - Logaritmo Natural de 2
draw(`LN2 (Logaritmo natural de 2): ${Math.LN2}`)

// LN10 - Logaritmo Natural de 10
draw(`LN10 (Logaritmo natural de 10): ${Math.LN10}`)

// LOG2E - Logaritmo de E con base 2 
draw(`LOG2E (Logaritmo de E con base 2): ${Math.LOG2E}`)

// LOG10E - Logaritmo de E con base 10
draw(`LOG10E (Logaritmo de E con base 10): ${Math.LOG10E}`)