/** A) 
 *@ Crear un sistema para :
 *@ - Mostrale a Cofla las particularidades de los 3 celulares
 *@ - Cada uno debe tener color, peso, resolucion de pantalla, camara y memoria RAM
 *@ - Deben poder prender, reiniciar, tomar fotos y grabar
*/

class Telefono{
  constructor(name, color, peso, screen, pixels, ram, storage){
    this.name = name
    this.color = color
    this.peso = peso
    this.screen = screen
    this.pixels = pixels
    this.ram = ram
    this.storage = storage
    this.encendido = false
    }

  prender(){
    if(this.encendido == false){
      alert('Telefono apagado')
      this.encendido = true
    }else {
      alert('Telefono prendido')
      this.encendido = false
    }
  }

  reiniciar(){this.encendido == true ? alert('Reiniciando telefono') : alert('El telefono esta apagado')}

  sacarFoto(){alert(`Foto tomada en una resolucion de ${this.pixels}MP`)}

  grabarVideo(){alert(`Grabando video en resolucion ${this.pixels}MP`)}

  mostrarInfo(){
    console.log(`Modelo: ${this.name}\nColor: ${this.color}\nPeso: ${this.peso}gr\nPantalla: ${this.screen}"\nCamara: ${this.pixels}MPX\nRAM: ${this.ram}GB\nAlmacenamiento: ${this.storage}GB`)
  }
  }

// - - - - - - - - - -
const root = document.querySelector('.root')
const phoneList = []

const printCardCell = (obj) =>{
  const card = document.createElement('div')
  card.classList = 'card'
  card.innerHTML = `
    <div class="phone__name">
      <h2>${obj.name}</h2>
    </div>
    <div class="caracteristicas">
      <p>Color: <span>${obj.color}</span></p>
      <p>Peso: <span>${obj.peso}gr</span></p>
      <p>Pantalla: <span>${obj.screen}"</span></p>
      <p>Camara: <span>${obj.pixels}MP</span></p>
      <p>RAM: <span>${obj.ram}GB</span></p>
      <p>Almacenamiento: <span>${obj.storage}GB</span></p>
    </div>
  `

  root.appendChild(card)
}

const cellToArr = (obj) => phoneList.push(obj)


let celular1 = new Telefono( 'iPhone 13 Pro Max','Dorado', 300, 6.7, 12, 4, 512)
cellToArr(celular1)

let celular2 = new Telefono( 'Moto G200 5G', 'Negro', 202, 6.78, 16, 8, 128)
cellToArr(celular2)

let celular3 = new Telefono( 'Samsung Galaxy S22 Ultra', 'Verde', 228, 6.8, 40, 12, 256)
cellToArr(celular3)

phoneList.forEach(e => printCardCell(e))


// celular3.prender()
// celular3.sacarFoto()
// celular3.grabarVideo()
// celular3.reiniciar()
// celular3.prender()
// celular3.mostrarInfo()


//@ B) Cofla no está satisfecho con los celulares así que decide ir a la sección de celulares de alta gama, donde va a poder encontrar los celulares mas caros del lugar, así que al entrar vió dos celulares que le encantaron, estos 2 celulares de alta gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores características y además pueden grabar en camara super lenta, tiene reconocimiento facial y una camara extra
//@     CREAR SOLUCIONES
//@      -Implementar todas estas cualidades en los celulares de alta gama

const altaGamaRoot = document.querySelector('.alta__gama')

class AltaGama extends Telefono{
  constructor(name, color, peso, screen, pixels, ram, storage, extraCameras) {
    super(name, color, peso, screen, pixels, ram, storage)
    this.slowMotion = true
    this.faceId = true
    this.extraCamera = extraCameras
  }

  slowMo(){
    if(this.slowMotion == true) return this.slowMotion = 'Si'
    else return this.slowMotion = 'No'
  }
  
  faceIdRecognition(){
    if(this.faceId == true) return this.faceId = 'Si'
    else return this.faceId = 'No'
  }
  
  camaraExtra(){
    if(this.extraCamera >= 1) return this.extraCamera
    else return this.extraCamera = 'No'
  }

  mostrarInfoUpdated(){
    return console.log(`${super.mostrarInfo()}\nCamara Lenta: ${this.slowMotion}\nReconocimiento Facial: ${this.faceId}\nCamara(s) Extra: ${this.camaraExtra()}`)
  }

}

//* Objeto para los alta gama
const cardAltaGama = (obj) =>{
  const card = document.createElement('div')
  card.classList = 'card'
  card.innerHTML = `
    <div class="phone__name">
      <h2>${obj.name}</h2>
    </div>
    <div class="caracteristicas">
      <p>Color: <span>${obj.color}</span></p>
      <p>Peso: <span>${obj.peso}gr</span></p>
      <p>Pantalla: <span>${obj.screen}"</span></p>
      <p>Camara: <span>${obj.pixels}MP</span></p>
      <p>RAM: <span>${obj.ram}GB</span></p>
      <p>Almacenamiento: <span>${obj.storage}GB</span></p>
      <p>Camara Lenta: <span>${obj.slowMo()}</span></p>
      <p>Reconocimiento Facial: <span>${obj.faceIdRecognition()}</span></p>
      <p>Camara(s) Extra: <span>${obj.camaraExtra()}</span></p>
    </div>
  `

  altaGamaRoot.appendChild(card)
}

//* Array para guardar los objetos creados
const altaGamaArray = []
const altaGamaAddArray = obj => altaGamaArray.push(obj)

//* Crear objeto y agregarlo al array
let cellAltaGama1 = new AltaGama('Samsung Galaxy Z Fold3 5G', 'Plateado', 271, 6.7, 12, 12, 256, 2)
let cellAltaGama2 = new AltaGama('iPhone 17 Hyper Max Pro', 'Dorado', 250, 6.9, 45, 16, 1024, 5)

altaGamaAddArray(cellAltaGama1)
altaGamaAddArray(cellAltaGama2)

altaGamaArray.forEach(e => cardAltaGama(e))

cellAltaGama1.mostrarInfoUpdated()


//@ C)Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones del Play Store ya que quiere jugar juegos que sean muy populares,que tengan buena puntuación y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares y sabe que si se descarga todas,probablemente juegue con todas, pero él se va a descargar solo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular,pero el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que vaadescargar
//@     CREAR SOLUCIONES
//@      - Crear un sistema que ayude a Cofla a decidir cual app descargar
//@      - La informacion de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso
//@      - Las Apps se deben poder instalar, abrir, cerrar y desisntalar

class Apps{
  constructor(descargas, puntuacion, peso){
    this.descargas = descargas
    this.puntuacion = puntuacion
    this.peso = peso
    this.instalada = false
    this.iniciada = false
  }

  abrir(){
    if(this.iniciada == false){
      this.iniciada = true
      alert('Abriendo aplicacion')
    }
  }

  cerrar(){
    if(this.iniciada == true){
      this.iniciada = false
      alert('Cerrando aplicacion')
    }
  }
  
  instalar(){
    let confirmacion = confirm('Quieres instalar esta aplicacion?')
    if(this.instalada == false && confirmacion == true){
        this.instalada = true
        alert('Instalacion completada')
      }
  }

  desinstalar(){
    let confirmacion = confirm('Quieres desinstalar esta aplicacion?')
    if(this.instalada == true && confirmacion == true){
        this.instalada = false
        alert('Desinstalacion completada')
      }
  }

  appInfo(){
    return `
    Descargas: <b>${this.descargas}</b><br>Puntuacion: <b>★${this.puntuacion}</b><br>Peso: <b>${this.peso}mb</b><br>`
  }
}

let app1 = new Apps(50000, 4.7, 23)
let app2 = new Apps(217500, 4.3, 51)
let app3 = new Apps(12300, 3.8, 5.6)
let app4 = new Apps(1500000, 4.5, 65)
// app1.appInfo()
document.write(`${app1.appInfo()}<br>${app2.appInfo()}<br>${app3.appInfo()}<br>${app4.appInfo()}<br>`)
// app1.instalar()
// app1.abrir()
// app1.cerrar()
// app1.desinstalar()