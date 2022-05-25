// Un joven muy afortunado logró ganar el primer premio de la lotería ... exacto,estamos hablando del pobre al que cofla le dió una mano,este pobre decide hacer una fiesta para festejar que salió de la pobreza con este milllonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas ...
//          -Dejar pasar soloalos mayores de edad
//          -La primer persona que entre despues de las2AM,no paga.

let free = false

/**
 * It takes two arguments, age and time, and if the age is greater than 18, it checks if the time is
 * between 2 and 7, and if it is, it logs a message to the console
 * @param age - 18
 * @param time - the time of day, in hours, that the person is trying to enter the club.
 */

const validarPersona = (age, time) =>{
  // const age = parseInt(prompt('Que edad tienes?'))

  if(age>18){
    if(time>=2 && time<7 && free!=true){
      console.log('Podes pasar gratis porque sos la primer persona que entro despues de las 2AM\nAdelante papu, datela en la pera');
      free = true
    }else{
      console.log(`Son las ${time}:00. Podes pasar, pero pagas la entrada`);
    }
  }else console.log('Acceso denegado. No es mayor de edad');
}

validarPersona(22, 23)
validarPersona(18, 24)
validarPersona(15, .2)
validarPersona(9, .6)
validarPersona(11, 2)
validarPersona(23, 2.4)
validarPersona(25, 3)