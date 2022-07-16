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