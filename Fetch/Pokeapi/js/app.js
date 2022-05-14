// Funciones utiles
const seleccionar = str => document.querySelector(str)
const crearElemento = str => document.createElement(str)

const nuevoElemento = (elem, className) =>{
  newElement = document.createElement(elem)
  newElement.classList = className
  return newElement
}

// Acceso a informacion por la API
const fetchData = async (id) =>{
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await resp.json()

  
  const pokeObject = {
    picture: data.sprites.front_default,
    name: data.species.name,
    xp: data.base_experience,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    attackSpecial: data.stats[3].base_stat,
    defenseSpecial: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    weight: data.weight,
    type1: data.types[0].type.name
  }

  // Condicional si no tiene segundo tipo
  data.types[1] == true
  ?Object.assign(pokeObject, {type2: data.types[1].type.name})
  :console.error('No tiene tipo 2');

  // Muestra los stats por consola
  for(let info in pokeObject){
    console.log(info+':',pokeObject[info]);
  }

  // console.log(data);
  console.log(pokeObject);
}

console.log(fetchData(4));

const drawInfo = (pokemon) =>{
  
}