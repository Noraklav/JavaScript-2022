const crearElemento = str => document.createElement(str)
const seleccionar = str => document.querySelector(str)
const root = seleccionar('#root')

const fetchData = async () =>{
  const resp = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  const data = await resp.json()

  class DolarObject{
    constructor(nombre, compra, venta){
      this.name = nombre
      this.buy = compra
      this.sold = venta
    }

    info(){
      return `Nombre: ${this.name} | Compra: ${this.buy} | Venta: ${this.sold} |`
    }
  }

  let dolarArray = []
  for(let info in data) {
    let objPos = data[info].casa
    if(objPos.compra != 'No Cotiza' && objPos.nombre != 'Argentina' && objPos.nombre != 'Dolar Contado con Liqui' && objPos.nombre != 'Bitcoin'){
      dolarArray.push(new DolarObject(objPos.nombre, objPos.compra, objPos.venta))
    }
  }

  dolarArray.forEach(e => drawCard(e))

  // Calculadora  
  const inputPrice = seleccionar('#inputPrice')
  const calcBtn = seleccionar('#calcBtn')
  const precioFinal = seleccionar('#precioFinal')

  calcBtn.onclick = e =>{
    e.preventDefault()
    let inputValue = parseFloat(inputPrice.value)
    let total = (inputValue + (inputValue*.66)) * parseFloat(dolarArray[0].buy)
    inputValue!=NaN
      ?precioFinal.innerHTML = total.toFixed(2)
      :precioFinal.innerHTML = '0,00'
  }

}

fetchData()

const drawCard = (obj) =>{
  let card = crearElemento('div')
  card.classList = 'container col-6 col-md-4 col-lg-3'

  card.innerHTML = `
  <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      <p class="card-text dolar-compra">Compra<span>$${obj.buy}</span></p>
      <p class="card-text dolar-venta">Venta<span>$${obj.sold}</span></p>
    </div>
  `

  root.appendChild(card)
}