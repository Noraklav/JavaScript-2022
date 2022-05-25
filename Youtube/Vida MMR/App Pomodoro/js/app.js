const tasks = [] // Almacenar las tareas que se vayan agregando
let time = 0 // Valor para la cuenta regresiva
let timer = null // Valor para el setInterval
let timeBreak = null // Valor del descanso
let current = null // Muestra la tarea actual en ejecucion

const seleccionar = str => document.querySelector(str)

const bAdd = seleccionar('#bAdd')
const itTask = seleccionar('#itTask')
const form = seleccionar('#form')

form.onsubmit = e =>{
  e.preventDefault()
  // This is checking if the input field is empty. If it is not empty, it will create a task
  if(itTask.value !== ''){
    createTask(itTask.value)
    itTask.value = ''
    // Cada vez que al arreglo se le agregue un nuevo elemento, va a haber que renderizarlo
    renderTask()
  }
}


// It creates a new task object with a random id, the title of the task, and a completed property set to false.
//@ param value - The value of the input field
const createTask = (value) =>{
  const newTask = {
    // Si no entedes el toString(36) busca 'radix' en MDN
    id: (Math.random()*100).toString(36).slice(3), 
    title: value,
    completed: false
  }
  tasks.unshift(newTask)
}

// 
const renderTask = () =>{

}