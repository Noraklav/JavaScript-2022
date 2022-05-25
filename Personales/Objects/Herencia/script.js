class Persona{
  static contadorPersona = 0
  constructor(name, surname, age){
    this._idPersona = ++Persona.contadorPersona
    this._name = name
    this._surname = surname
    this._age = age
  }

  get idPersona(){return this._idPersona} 
  get name(){return this._name} 
  get surname(){return this._surname} 
  get age(){return this._age} 

  set idPersona(value){return this._idPersona = value} 
  set name(value){return this._name = value} 
  set surname(value){return this._surname = value} 
  set age(value){return this._age = value} 

  toString(){return `${this._idPersona} | ${this._name} ${this._surname} | ${this._age}`}
}

let agustin = new Persona('Agustin', 'DV', 22)
let abril = new Persona('Abril', 'Burguez', 19)
console.log(agustin.toString());
console.log(abril.toString());


class Empleado extends Persona{
  static contEmpleados = 0
  constructor(name, surname, age, sueldo){
    super(name, surname, age)
    this._idEmpleado = ++Empleado.contEmpleados
    this._sueldo = sueldo
  }

  get idEmpleado(){return this._idEmpleado}
  get sueldo(){return this._sueldo}
  
  set sueldo(value){this._sueldo = value}

  toString(){
    return `${super.toString()}, ${this._idEmpleado} ${this._sueldo}`
  }
}


let empleado1 = new Empleado('Pepe', 'Mujica', 43, 85000)
console.log(empleado1.toString());
let empleado2 = new Empleado('Pepe', 'Mujica', 43, 85000)
console.log(empleado2.toString());



class Cliente extends Persona{
  static contCliente = 0
  constructor(name, surname, age){
    super(name, surname, age)
    this._idCliente = ++Cliente.contCliente
    this._date = new Date()
  }

  get fechaRegistro(){return this._date}
  set fechaRegistro(value){this._date = value}

  toString(){
    return `
    Cliente: ${this._idCliente}
    Persona: ${super.toString()}
    Compra realizada: ${this._date}`
  }
}

let cliente1 = new Cliente('ClienteName1', 'ClienteSurname1', 43)
console.log(cliente1.toString());
let cliente2 = new Cliente('ClienteName2', 'ClienteSuname2', 43)
console.log(cliente2.toString());