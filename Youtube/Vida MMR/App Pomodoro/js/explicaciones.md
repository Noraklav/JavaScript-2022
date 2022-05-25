// It creates a new task object with a random id, the title of the task, and a completed property set to false
//@ param value - The value of the input field

  const createTask = (value) =>{
    const newTask = {
      id: (Math.random()*100).toString(36).slice(3), 
      title: value,
      completed: false
    }
    tasks.unshift(newTask)
  }