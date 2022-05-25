const crearElemento = (element, text) => {
  let newElement = document.createElement(element)
  newElement.textContent = text || null
  return newElement
}

const seleccionar = str => document.querySelector(str)

// window.open() y close()
let button = crearElemento('button', 'Boton reutilizable')
button.onclick = () => window.open('./window.close.html')
document.body.appendChild(button)

// Window.stop()
document.write('Abajo de esta linea hay un "window.stop()"')
// button.onclick = () => window.stop()
// document.write('Esto no se cargo')

// Permite imprimir la pantalla
button.onclick = () => window.print()