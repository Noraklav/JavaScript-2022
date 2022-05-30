let cadena = 'String epico'
let resultado;

// Concat
// resultado = cadena.concat(' y concatenado')
// document.write('Concat: '+resultado)
document.write(`<b>${cadena}</b>`)

// Starts With
resultado = cadena.startsWith('S')
document.write('<br>startsWith: '+resultado)
resultado = cadena.startsWith('s')
document.write('<br>startsWith: '+resultado)

// Ends With
resultado = cadena.endsWith('o')
document.write('<br>endsWith: '+resultado)
resultado = cadena.endsWith('O')
document.write('<br>endsWith: '+resultado)

// Includes
resultado = cadena.includes('concatenado')
document.write('<br>Includes: '+resultado)
resultado = cadena.includes('epico')
document.write('<br>Includes: '+resultado)

// IndexOf - Devuelve el indice del primer caracter de la cadena. Si no existe, devuelve -1
resultado = cadena.indexOf('epico') //Existe
document.write('<br>indexOf: '+resultado)
resultado = cadena.indexOf('epicos') //No existe
document.write('<br>indexOf: '+resultado)

// lastIndexOf - Devuelve el indice del ultimo caracter de la cadena. Si no existe, devuelve -1
cadena = 'Hola bebe bebe bebe bebe'
resultado = cadena.lastIndexOf('bebe') //Existe
document.write('<br>lastIndexOf: '+resultado)
resultado = cadena.lastIndexOf('Bebe') //No existe
document.write('<br>lastIndexOf: '+resultado)