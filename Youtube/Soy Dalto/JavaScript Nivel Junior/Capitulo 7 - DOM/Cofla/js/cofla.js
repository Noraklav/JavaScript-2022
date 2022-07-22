const seleccionarClase = str => document.querySelector(`.${str}`)
const flexContainer = seleccionarClase('flex-container')
let contador = 0

const crearLlave = (name, model, price) =>{
  contador++
  name = `<h2>${name}</h2>`
  model = `<h3 id=${model}>${model}</h3>`
  price = `<p><b class='price'>${price}</b></p>`

  return [name, model, price]
}

const crearFragmento = document.createDocumentFragment()

for(let x=1;x<=20;x++){
  let div = document.createElement('div')
  div.classList = `flex-item item-${x}`
  
  let modeloRandom = Math.floor(Math.random()*10000)
  let precioRandom = Math.floor(Math.random()*10+30)
  let llave = crearLlave(`Llave ${x}`, `Modelo ${modeloRandom}`, `Precio $${precioRandom}`)
  div.innerHTML = llave[0] + llave[1] + llave[2]
  crearFragmento.appendChild(div)
}


flexContainer.appendChild(crearFragmento)