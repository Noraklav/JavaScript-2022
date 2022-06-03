const coflaSpace = document.querySelector('.cofla')

console.log(coflaSpace);

const addDiv = str =>{
  let div = document.createElement('div')
  div.innerHTML = str
  coflaSpace.appendChild(div)
}

// @A) Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que deve realizar es mucho mas avanzada de la que tenia antesm adenas de suma, resta, multiplicacion y division, ahora tambien necesitara calcular potencias, raices cuadradas y cubicas
          // Crear soluciones:
          // - Perfeccionar calculadora para implementar nuevas funciones

const calculadoraDeLaSalada = (select) =>{
  select = parseInt(prompt('1. Calcular potencia\n2. Raiz cuadrada\n3. Raiz cubica'))

  if(select == 1){
    let num1 = parseInt(prompt('Numero 1'))
    let num2 = parseInt(prompt('Numero 2'))
    addDiv(`${num1}^${num2}: <b>${Math.pow(num1, num2)}</b>`)
  }
  else if(select == 2){
    let num1 = parseInt(prompt('Numero 1'))
    addDiv(`Raiz cuadrada de ${num1}: <b>${Math.sqrt(num1)}</b>`)
  }
  else if(select == 3){
    let num1 = parseInt(prompt('Numero 1'))
    addDiv(`Raiz cubica de ${num1}: <b>${Math.cbrt(num1)}</b>`)
  }
  else alert('Ingresa un numero entre 1 y 3')
}

calculadoraDeLaSalada(1)