const seleccionarClase = str => document.querySelector(`.${str}`)
const seleccionarTodos = str => document.querySelectorAll(str)
const seleccionarID = str => document.getElementById(str)
const docWrite = str => document.write(str)
const cLog = str => console.log(str)

let parrafoSolo = seleccionarClase('parrafo')
// cLog(parrafoSolo)

let muchosParrafos = seleccionarTodos('.parrafo')
// muchosParrafos.forEach(e => cLog(e))

let parrafoConID = seleccionarID('parrafo')
// cLog(parrafoConID)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
// @ Metodos para Definir, obtener y eliminar atributos
const rangoEtario = seleccionarClase('rangoEtario')

// setAttribute
rangoEtario.setAttribute('type', 'number') //Tambien puede crear atributos si no los tiene

// getAttribute
cLog(rangoEtario.getAttribute('type')) //Devuelve number (En este caso)

// removeAttribute
rangoEtario.removeAttribute('type', 'number')
rangoEtario.setAttribute('type', 'reinocladoistoneido')
cLog(rangoEtario)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Atributos globales
let titulo = seleccionarClase('title')

// contentEditable
titulo.setAttribute('contentEditable', false) //EPICARDO

// dir: Direccion del texto
titulo.setAttribute('dir', 'rtl') //ltr: Left to Rigtt - rtl: Right to Left

// hidden
titulo.removeAttribute('hidden')

// tabindex - Selecciona el elemento con el tab (Segun que numero tenga es el orden)
titulo.setAttribute('tabindex', '0')

// title - Muestra texto al pasar el cursor por arriba
titulo.setAttribute('title', 'jaja ke gei xd')
cLog(titulo)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Atributos de los inputs
let input = seleccionarClase('input-normal')

// className - Devuelve el nombre de la clase y la puede modificar
input.className = 'clase-modificada'
cLog(input.className)

// value - Muestra lo que esta adentro del input
cLog(input.value)

// type - Cambia el tipo de input (Tambien se puede modificar el tipo de input)
input.type = 'color'
cLog(input.type)

// accept - Para los input type file
input.type = 'file'
input.accept = 'image/png'

input.setAttribute('hidden', true)

// form - Permite ejecutar un input dentro de un form
// Esta en el HTML (id="formulario")

let formInput = seleccionarID('formInput')
formInput.autocomplete = 'off'

// minlength
formInput.minLength = 8

// placeholder
formInput.onmouseenter = () => formInput.placeholder = ''
formInput.onmouseleave = () => formInput.placeholder = 'Bananaaaa'

// required
formInput.required = true

cLog(input)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Atributo style
let epicTitle = seleccionarID('h1Epico')

epicTitle.style.background = '#333'
epicTitle.style.color = '#8dfc3a'
epicTitle.style.padding = '1rem'
epicTitle.style.textAlign = 'center'

cLog(epicTitle)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Clases, classList y metodos de classList
const epicClassL = seleccionarID('epicClassList')

// add - Agrega una clase
epicClassL.classList.add('grande') //'grande' es del archivo SCSS

// remove - Remueve una clase
epicClassL.classList.remove('mucho-texto')

// item - Devuelve la clase que este en la posicion que se le pida
for(let x=0;x<3;x++) epicClassL.classList.add(`clase${x+1}`)
cLog(epicClassL.classList.item(3))

// contains - Verifica si tiene x clase que pidamos
let nombreDeClase = 'grande'
let value = epicClassL.classList.contains(nombreDeClase)
// value?docWrite(`La clase "${nombreDeClase}" existe`):docWrite(`La clase "${nombreDeClase}" NO existe`)

// toggle - Si tiene la clase "x" la quita, y si no la tiene, se la agrega
nombreDeClase = 'clase7'
epicClassL.classList.toggle(nombreDeClase)

// replace - Reemplaza una clase por otra
epicClassL.classList.replace('grande', 'class-replaced')

cLog(epicClassL)

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Obtencion y modificacion de elementos
const titulardo = seleccionarClase('titulardo')
const divElements = seleccionarClase('divElements')
const modificar = seleccionarClase('modificar')
modificar.setAttribute('style', 'visibility: hidden;')
const addP = (str) => {let p = document.createElement('p');p.innerHTML = str;divElements.appendChild(p)}

// textContent - Muestra todo el contenido dentro de la etiqueta
addP(titulardo.textContent + ' (<b>Con textContent</b>)')

// innerHTML
cLog(titulardo.innerHTML)
addP('innerHMTL por consola')

// outerHTML - Muestra todo del node element
cLog(titulardo.outerHTML)
addP('outerHTML por consola')

//* - - - - - - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Creacion de elementos
const elementsContainer = seleccionarID('elementsContainer')

console.log(elementsContainer)

// createElement + appendChild
const crearElemento = (element, str) => {
  element = document.createElement(element);
  element.innerHTML = str;
  elementsContainer.appendChild(element)
}

// createTextNode + appendChild
const createNodeElement = (element, str) => {
  element = document.createTextNode(str);
  elementsContainer.appendChild(element)
}

// createDocumentFragment - Este consume muchisimos menos recursos que createElement
const createFragment = (element, elementsCant, str) =>{
  const fragmento = document.createDocumentFragment()
  for(let x=0;x<elementsCant;x++){
    const item = document.createElement(element)
    item.innerHTML = str || 'No se ha escrito nada'
    fragmento.appendChild(item)
  }
  elementsContainer.appendChild(fragmento)
}

crearElemento('p', 'Elemento creado dinamicamente con <b>createElement</b>')
createNodeElement('p', 'Elemento creado dinamicamente con createTextNode')
createFragment('li', 5, 'BANANAAAAAA')


cLog(elementsContainer)