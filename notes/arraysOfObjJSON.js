// Arrays of Objects & JSON

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
        isCompleted: true
    }
]

// print everything
console.log(todos)

// print the second element of text
console.log(todos[1].text)

// JSON - data format
// convert the data into json format
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)
