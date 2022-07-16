const crearElemento = str => document.createElement(str)
const seleccionar = str => document.querySelector(str)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const coflaSpace = document.querySelector('.coflaSpace')
const allTheInfo = document.querySelector('.all-the-info')

//@ La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero necesitamos ver esto mas ordenadamente
  // ✓ - Crear una funcion que al pasarle como parametro la materia nos devuelva: profesor asignado y el nombre de todos los alumnos
  // ✓ - Crear una funcion que nos diga en cuantas clases esta cofla
  // ✓ - Nombrar las clases en las que esta y los profesores de cada una

const materiaObj = {
  fisica : ['Simaris', 'Daniel', 'John', 'Jeremy', 'Nicole', 'Tammy'],
  ingles : ['Natah', 'Deborah', 'Eric', 'Henry', 'Clayton', 'Cofla', 'David'],
  programacion : ['Suda', 'Jhon', 'Henry', 'Tammy', 'David', 'Daniel', 'Cofla'],
  matematica : ['Teshin', 'Deborah', 'Eric', 'Nicole', 'Clayton', 'John'],
  UIUX : ['Umbra', 'Nicole', 'Tammy', 'Clayton', 'Deborah', 'David', 'Cofla'],
}

const drawCard = (object, keyObject) =>{
  let card = crearElemento('div')

  let h4 = crearElemento('h4')
  h4.innerHTML = `Clase de ${capitalize(keyObject)} a cargo del profesor ${capitalize(object[0])}`
  
  let p = crearElemento('p')
  p.innerHTML = `Alumnos: ${object.slice(1).join(', ')}`

  card.appendChild(h4)
  card.appendChild(p)
  coflaSpace.appendChild(card)
}

const getInfo = (materia) =>{
  if(materia !== false){
    drawCard(materiaObj[materia], materia)
  }else return false
}

const mostrarTodo = (materia)=>{
  if(!materia) for(let obj in materiaObj) drawCard(materiaObj[obj], obj)
  else return false;} 
  mostrarTodo()

// getInfo('matematica')




const coflaWhere = (alumnoName) =>{
  let arrayMaterias = []
  let arrayProfesores = []
  let coflaMaterias = []
  for(materia in materiaObj){
    let alumnos = materiaObj[materia].slice(1)
    arrayMaterias.push(materia)
    for(let x=0;x<alumnos.length;x++){
      if(alumnos[x] == alumnoName){
        coflaMaterias.push(capitalize(materia))
        arrayProfesores.push(materiaObj[materia][0])
      }
    }
  }

  coflaMaterias = coflaMaterias.join(', ')
  arrayProfesores = arrayProfesores.join(', ')

  document.write(`Alumno: <b>${alumnoName}</b><br>Profesores: <b>${arrayProfesores}</b><br>Materias: <b>${coflaMaterias}</b>`)
}

coflaWhere('Nicole')