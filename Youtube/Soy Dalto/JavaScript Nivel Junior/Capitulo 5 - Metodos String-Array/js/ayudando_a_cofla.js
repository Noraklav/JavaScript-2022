const coflaSpace = document.querySelector('.cofla')

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

// * - - - - - - - - - - - - - - - - - - - -
// @B) La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero necesitamos ver esto mas ordenadamente
          // Crear soluciones
          // Crear una funcion que al pasarle como parametro la materia nos devuelva: profesor asignado y el nombre de todos los alumnos
          // Crear una funcion que nos diga en cuantas clases esta cofla
          // Nombrar las clases en las que esta y los profesores de cada una

const getInfo = (materia) =>{
  materias={
    'fisica':['Umbra', 'Volt', 'Rhino', 'Nekros', 'Ivara', 'Frost'],
    'programacion': ['Umbra', 'Rhino', 'Saryn', 'Nekros', 'Excalibur', 'Nova'],
    'logica': ['Umbra', 'Volt', 'Saryn', 'Nekros', 'Ash', 'Trinity'],
    'matematica': ['Volt', 'Rhino', 'Saryn', 'Nekros', 'Mesa', 'Wukong']
  }

  // Esto devuelve los nombres de los alumnos registrados en la materia
  if(materias[materia] !== undefined){ return `<br><b>Alumnos registrados en ${materia}</b><br>${materias[materia].sort().join(', ')}` }
  else return false
}

let info = getInfo('fisica')

if(info !== false) document.write(info)



// * - - - - - - - - - - - - - - - - - - - -
// @Botones para probar los ejercicios
// Calculadora de la salada

let calcBtn = document.createElement('button')
calcBtn.innerText = 'Calculadora de la salada'
calcBtn.onclick = () => calculadoraDeLaSalada()
coflaSpace.appendChild(calcBtn)