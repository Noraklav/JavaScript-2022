document.body.innerHTML = ''
const dWrite = str => document.write(str)

let array = ['Agustin', 'Noraklav', 'Crypther']
dWrite('Array original: '+ array.join(', ')+'<br>')

// @Transformadores
// pop - Quita el ultimo elemento
array.pop()
dWrite('<br>pop: '+array)

// shif - Quita el primer elemento
array.shift()
dWrite('<br>shift: '+array)

// push - Agrega un elemento al final
array.push('Crypther')
dWrite('<br>push: '+array)

// unshift - Agrega un elemento al final
array.unshift('Agustin')
dWrite('<br>unshift: '+array)

// reverse - Devuelve el array al reves
array.reverse()
dWrite('<br>reverse: '+array)

// sort - Ordena el array
let arrNum = [8,9,32,47,12,54]
arrNum.sort()
array.sort()
dWrite('<br>sort: '+array)
dWrite('<br>sort: '+arrNum+' (Con numeros no funciona bien)')

