// loops

const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Do MACM 201 assignment',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Finish CMPT 371 assignment 2',
        isCompleted: false
    }
]

// For loops
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

// while loop
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`)
    i++
}


// Loop through arrays
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
}

// for of loop
for(let todo of todos) {
    // console.log(todo)   // get everything
    // console.log(todo.text) // get text
    console.log(todo.id)   // get id
}

