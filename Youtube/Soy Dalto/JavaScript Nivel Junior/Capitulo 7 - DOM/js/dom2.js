const seleccionarClase2 = str => document.querySelector(`.${str}`)
const seleccionarTodos2 = str => document.querySelectorAll(str)
const seleccionarID2 = str => document.getElementById(str)
const docWrite2 = str => document.write(str)
const cLog2 = str => console.log(`%c• ${str}`, 'color: yellow; background-color: orangered;font-weight: bold; padding: 5px;')

// @ Obtencion y modificacion de Childs
const childsContainer = seleccionarClase2('childsContainer')

// firstChild - Devuelve el primer nodo
const firstSon = childsContainer.firstChild
cLog2('firtsChild')
console.log(firstSon)

// lastChild - Devuelve el ultimo nodo
const lastSon = childsContainer.lastChild
cLog2('lastChild')
console.log(lastSon)

// firstElementChild - Devuelve el primer elemento
const firstElementSon = childsContainer.firstElementChild
cLog2('firstElementChild')
console.log(firstElementSon)

// lastElementChild - Devuelve el ultimo elemento
const lastElementSon = childsContainer.lastElementChild
cLog2('lastElementChild')
console.log(lastElementSon)

// childNodes - Devuelve una lista de los nodos (No es un array)
const allTheSons = childsContainer.childNodes
cLog2('childNodes')
allTheSons.forEach((e, index) => console.log(index, e))

// children - Devuelve una lista de nodos con los elementos (No es un array)
const theChildren = childsContainer.children
cLog2('children')
for(let hijo of theChildren) console.log(hijo)

// * - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Metodos de childs
const childsContainer2 = seleccionarClase2('childsContainer2')
const h2Nuevo = document.createElement('h2')
const p = document.createElement('p')
const h2Viejo = seleccionarClase2('h2_viejo')
const pViejo = seleccionarClase2('p_viejo')

h2Nuevo.innerHTML = 'Metodos con childs'
p.innerHTML = 'Parrafardo'
childsContainer2.appendChild(h2Nuevo)
childsContainer2.appendChild(p)

// replaceChild - Reemplaza un nodo por otro
childsContainer2.replaceChild(h2Nuevo, h2Viejo)

// removeChild - Quita un nodo
childsContainer2.removeChild(pViejo)

// hasChildNodes - Verifica si tiene hijos el nodo
let respuesta = childsContainer2.hasChildNodes()
respuesta?docWrite2('El elemento tiene hijos'):docWrite2('El elemento no tiene hijos')

// * - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Metodos de parents
const parentContainer = seleccionarClase2('parentCont')
const h2Parent = seleccionarClase2('h2Parent')
const pParent = seleccionarClase2('pParent')
const elementoPadre = (e) => console.log(e.parentElement)
const nodoPadre = (e) => console.log(e.parentNode)

elementoPadre(parentContainer)
elementoPadre(h2Parent)
elementoPadre(pParent)
nodoPadre(parentContainer)
nodoPadre(h2Parent)
nodoPadre(pParent)

// * - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Metodos de siblings
const siblingContainer = seleccionarClase2('siblingCont')
const h2Sibling = seleccionarClase2('h2Sibling')
const pSibling = seleccionarClase2('pSibling')

const nextBro = e => console.log(e.nextSibling)
const previousBro = e => console.log(e.previousSibling)
const nextElementBro = e => console.log(e.nextElementSibling)
const previousElementBro = e => console.log(e.previousElementSibling)

nextBro(h2Sibling)
previousBro(h2Sibling)
nextElementBro(h2Sibling)
previousElementBro(h2Sibling)

// * - - - - - - - - - - - - - - - - - - - -
console.clear()
// @ Nodos - Extra
const div3 = seleccionarClase2('div-3')

// closest - Toma el elemento mas cercano que coincida con el selector que se le pase
console.log(div3.closest('.div'))