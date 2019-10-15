// Arrow Functions

// es6 or es2015
const addNums = (num1 = 1, num2 = 1) => num1 + num2 // to return the value 
// {
//     console.log(num1 + num2)  
// }


const addNums2 = num1 => num1 + 5 // to return the value 

/* 
    this format can also be use in forEach

    Ex. todos.forEach((todo) => console.log(todo))

*/

console.log(addNums(5, 5))

console.log(addNums2(5))
