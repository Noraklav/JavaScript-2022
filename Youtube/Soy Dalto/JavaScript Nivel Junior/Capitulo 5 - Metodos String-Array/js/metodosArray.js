const root = document.querySelector('.rootArr')

const dWrite = str =>{
	let p = document.createElement('p')
	p.innerHTML = str
	root.appendChild(p)
}
const randomNumbers = (arr, limite, maxNum) =>{
	for(let x=1;x<=limite;x++){
		let rand = Math.floor(Math.random()*maxNum)
		arr.push(rand)
	}
}

dWrite('<h2>Metodos Array</h2>')

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
array.unshift('Agustin', 22, ['||', 'Soy', 'un', 'array', 'dentro', 'de', 'otro', '||'])
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

// - - - - - - - - - -
arrNum = [] //Limpiando el array
randomNumbers(arrNum, 15, 200)
// - - - - - - - - - -

// splice - Desde la posision "x"(4), elimina "y"(7) elementos, y despues ponele "z"(Lo que quieras y cuantos quieras)
arrNum.splice(4, 7, 110011011, 'Texto2', 'Texto3')
dWrite('<br>splice: '+arrNum)

// join
result = array.join('<br>Elemento: ')
dWrite(`<br>Array sin join: ${array}<br>Array con join: ${result}`)

// slice
result = arrNum.slice(4, 8).join(' - ')
result2 = arrNum.slice(0, -1).join(' _ ')
dWrite(`<br>Sin slice: ${arrNum}<br>Con slice: ${result}<br>Con slice (Sin el ultimo): ${result2}`)

// - - - - - - - - - - - - - - - - - - - - -

// Metodos de string que tambien sirven para Arrays
let newArray = [137,46,31,151,1100]
dWrite('<br>Array de referencia: '+newArray)

// includes
dWrite(`includes: ${newArray.includes(46)}`)
// indexOf
dWrite(`indexOf: ${newArray.indexOf(151)}`)
dWrite(`indexOf: ${newArray.indexOf(5)}`)
// lastIndexOf
array = ['Agustin', 'Noraklav', 'Crypther'].join('')
dWrite(`lastIndexOf: ${array.lastIndexOf('yp')}`)
dWrite(`lastIndexOf: ${array.lastIndexOf('vaca')}`)

// - - - - - - - - - - - - - - - - - - - - -

// Bucles
// filter
array = ['Agustin', 'Noraklav', 'Crypther', 'Valkaron', 'ElSacacorchos', 'Novathium']

filterResult = array.filter(e => e.includes('o'))
dWrite('Filtrado: '+filterResult)