// Abstraccion: Tratar de hacer el objeto lo mas sencillo posible
// Modularidad: Poder resolver problemas grandes separados por partes
// Encapsulamiento: Hacer que todos los datos sean privados
// Polimorfismo: Es ver como un objeto se comporta de manera distinta  ante un mismo metodo
//    Ej: Metodo caminar(). Un perro lo va a hacer de una forma, un gato de otra, un caballo de otra, etc

class Animal{
  constructor(especie, edad, color) {
    this.especie = especie
    this.edad = edad
    this.color = color
  }

  verInfo() {document.write(`Especie: ${this.especie} <br> Edad: ${this.edad} <br> Color: ${this.color}`)}
}

const perro1 = new Animal('Perro', 7, 'Negro')
// perro.verInfo()


class Perro extends Animal{
  constructor(especie, edad, color, raza){
    super(especie, edad, color)
    this.raza = raza
  }

  static ladrar(){alert('WOOF')}

  set setRaza(value){return this.raza = value}
  get getRaza(){return this.raza}

}

const perro2 = new Perro('Perro', 5, 'Crema', 'Labrador')
// perro.ladrar() 
// Perro.ladrar()

perro2.setRaza = 'Doberman'
console.log(perro2);
console.log(perro2.getRaza);