// Cofla vuelve de la comisaría exaustoypor lo cansado que estaba se fue a dormir... Al otro día comienzan las clases del ciclo básico de la universidad(porque cofla quiere ser programadoryse incribió en la facultad de ingeniería para estudiar desarrollo de software)
// En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad: se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.
// - Crear mini-sistema que nos permita registrar los alumnos que estan presentes(P) y ausentes(A) en clase.
// - Pasados los 30 días mostrar la situación final de todos los alumnos(Nro total de presentes y ausentes).
// - Se puede tener un maximo de 10% de ausencias por semestre,si se tienen mas aclarar que está reprobado.
console.clear();

let cantidad = parseInt(prompt('Cuantos alumnos son?'))
let alumnos = []


for(let x=0;x<cantidad;x++){
  alumnos[x] = [prompt(`Nombre del alumno ${x+1}`), 0]
}

// alumnos[x][0] = Nombres
// alumnos[x][1] = Asistencia

/**
 * It takes a name and a list position as arguments, asks the user for a value, and if the value is 'p'
 * or 'P', it increments the second element of the list at the given position.
 * @param name - The name of the student
 * @param listPos - The position of the student in the array.
 */
const tomarAsitencia = (name, listPos) =>{
  let presencia = prompt(name)
  if(presencia == 'p' || presencia == 'P'){
      alumnos[listPos][1]++
  }
}

/* It's taking the attendance 5 times. */
for(let z=0;z<5;z++){
  for(let alumno in alumnos){
    tomarAsitencia(alumnos[alumno][0], alumno)
  }
}

for(let alumno in alumnos){
  let result = `${alumnos[alumno][0]}:\n
  _____Asistencias: ${alumnos[alumno][1]}
  _____Ausencias: ${30 - alumnos[alumno][1]}`
  // Si las ausencia son mayores que 18 (El 10% de 180 dias, que es lo que tiene un sementre)
  if(30-parseInt(alumnos[alumno][1]) > 18)result+= `<b>Reprobado por faltas</b>\n`
  else result+= '\n\n'

  document.write(result)
}

console.table(alumnos);