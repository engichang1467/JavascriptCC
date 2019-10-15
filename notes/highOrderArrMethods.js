// High Order Array Methods

// forEach
todos.forEach(function(todo) {
    console.log(todo.text)
})

// map
const todoText = todos.map(function(todo) {
    return todo.text
})

console.log(todoText)

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
})

// filter + map
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text    // this will only let it output teh text
})

console.log(todoCompleted)
