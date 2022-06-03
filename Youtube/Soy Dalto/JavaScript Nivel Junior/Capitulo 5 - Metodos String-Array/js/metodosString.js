let rootStr = document.querySelector('.rootStr')


let cadena = 'String epico'
let resultado;
const docWrite = str => document.write(str)

docWrite('<h2>Metodos String</h2>')

// Concat
resultado = cadena.concat(' y concatenado')
docWrite('Concat: '+resultado)

// Starts With
resultado = cadena.startsWith('S')
resultado = cadena.startsWith('s')
docWrite('<br>startsWith: '+resultado)

// Ends With
resultado = cadena.endsWith('o')
resultado = cadena.endsWith('O')
docWrite('<br>endsWith: '+resultado)

// Includes
resultado = cadena.includes('concatenado')
resultado = cadena.includes('epico')
docWrite('<br>Includes: '+resultado)

// IndexOf - Devuelve el indice del primer caracter de la cadena. Si no existe, devuelve -1
resultado = cadena.indexOf('epico')
resultado = cadena.indexOf('epicos')
docWrite('<br>indexOf: '+resultado)

// lastIndexOf - Devuelve el indice del ultimo caracter de la cadena. Si no existe, devuelve -1
cadena = 'Hola bebe bebe bebe bebe'
resultado = cadena.lastIndexOf('bebe')
resultado = cadena.lastIndexOf('Bebe')
docWrite('<br>lastIndexOf: '+resultado)

// padStart & padEnds
let cadena2 = 'abc'
docWrite('<br>padStart: '+cadena2.padStart(5, '•'))
docWrite('<br>padEnd: '+cadena2.padEnd(10, '♠'))

// repeat
cadena2 = 'abc '
resultado = cadena2.repeat(5)
docWrite('<br>repeat: '+resultado)

// split
cadena2 = 'Aguanten las milanesas'
resultado = cadena2.split('')
let resultado2 = cadena2.split(' ')
docWrite('<br><br>split: '+resultado)
docWrite('<br>split: '+resultado2[2])

// substring
let str = 'ABCDEFGHI'
resultado = str.substring(5, 7)
docWrite('<br><br>Sin substring: '+str)
docWrite('<br>Con substring: '+resultado)

// toLowerCase
str = 'MINUSCULAS'
resultado = str.toLowerCase()
docWrite('<br><br>Sin toLowerCase: '+str)
docWrite('<br>Con toLowerCase: '+resultado)

// toUpperCase
str = 'mayusculas'
resultado = str.toUpperCase()
docWrite('<br><br>Sin toUpperCase: '+str)
docWrite('<br>Con toUpperCase: '+resultado)

// toString
let numerito = 50
resultado = numerito.toString()
docWrite('<br><br>Sin toString: '+ (2 + numerito)) // 2 + 50: 52
docWrite('<br>Con toString: '+(2 + resultado)) // 2 + '50': 250
// Ejemplo 2
let arrStr = ['Agustin', 'Manuel']
resultado = arrStr.toString()
docWrite('<br>Array con toString: '+resultado[0])
docWrite('<br>Array sin toString: '+arrStr[0])

// trim - Elimina los espacios en blanco
let datoIngresado = '     Pato :D'
resultado = datoIngresado.trim()
docWrite(`<br><br>Tamaño de texto sin trim: ${datoIngresado.length} | ${datoIngresado}`)
docWrite(`<br>Tamaño de texto con trim: ${resultado.length} | ${resultado}`)