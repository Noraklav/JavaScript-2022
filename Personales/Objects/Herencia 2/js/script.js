class Product{
  static productCouter = 0
  constructor(name, price){
    this._idProduct = ++Product.productCouter
    this._name = name
    this._price = price
  }

  // get methods
  get idProduct(){return this._idProduct}
  get nameProduct(){return this._name}
  get priceProduct(){return this._price}

  // set methods
  set nameProduct(value){this._name = value}
  set priceProduct(value){this._price = value}

  getData = () => ` ID: ${this._idProduct} / ${this._name} / $${this._price}`
}


class Order{
  static orderCounter = 0

  static get MAX_PRODUCTS(){return 5}

  constructor(){
    this._idOrder = ++Order.orderCounter
    this._productsArray = []
  }

  get idOrder(){return this._idOrder}

  addProduct(product){
    if(this._productsArray.length < Order.MAX_PRODUCTS){
      this._productsArray.push(product)
    }
    else console.warn('No se pueden agregar mas productos');
    }

  calcularProducto(){
    let totalVenta = 0
    for(let prod of this._productsArray){
      totalVenta += prod._price
    }
    return totalVenta
  }

  showOrder(){
    let productosOrden = ''
    for(let eProductos of this._productsArray){
      productosOrden += `ID_${eProductos._idProduct} | $${eProductos._price} | ${eProductos._name.toString()}\n`
    }
    console.log(`Orden: ${this._idOrder} / Total: $${this.calcularProducto()} \nProductos:\n${productosOrden}`)
  }
}

const createOrder = (order, product) => order.addProduct(product)
const createProduct = (name, price) => new Product(name, price)

let producto1 = createProduct('Moto G8 Play', 35000)
let producto2 = createProduct('Camisa Rosa', 4700)
let producto3 = createProduct('Gatorade', 170)
let producto4 = createProduct('Horizon Zero Dawn', 7400)
let producto5 = createProduct('Mouse Logitech 203', 3500)
let producto6 = createProduct('Monitor Samsumg', 47350)

let orden1 = new Order()
createOrder(orden1, producto1)
createOrder(orden1, producto2)
createOrder(orden1, producto3)
createOrder(orden1, producto4)
createOrder(orden1, producto5)
// Desde este en adelante no entra
createOrder(orden1, producto6)
console.log(orden1.showOrder())

let producto1_1 = createProduct('Moto G8 Play', 35000)
let producto2_1 = createProduct('Camisa Rosa', 4700)
let producto3_1 = createProduct('Gatorade', 170)
let producto4_1 = createProduct('Horizon Zero Dawn', 7400)
let producto5_1 = createProduct('Mouse Logitech 203', 3500)
let producto6_1 = createProduct('Monitor Samsumg', 47350)

let orden2 = new Order()
createOrder(orden2, producto1_1)
createOrder(orden2, producto2_1)
createOrder(orden2, producto3_1)
createOrder(orden2, producto4_1)
createOrder(orden2, producto5_1)
// Desde este en adelante no entra
createOrder(orden2, producto6)
console.log(orden2.showOrder())