// Conditionals
const x = 6
const y = 11

// == only check the value
// === also check datatype

if (x === 10) {
    console.log('x is 10')
}
else if (x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10')
}
else if (x > 10) {
    console.log('x is greater than 10')
}
else {
    console.log('x is NOT 10')
}




// ternary operator - short hand if statement

const x = 9

const color = x > 10 ? 'red' : 'blue'

// console.log(color)

// switches
switch(color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is NOT red or blue')
        break
}