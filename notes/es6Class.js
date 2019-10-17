// ES6 Classes

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


// Instantiate object
const person1 = new Person('Mike', 'Liu', '1-3-1999')
const person2 = new Person('Mary', 'Cho', '3-12-1998')

// // get date
// console.log(person2.dob)

// // get year
// console.log(person2.dob.getFullYear())

// // get year with our method
// console.log(person1.getBirthYear()) 

// // get a person full name with out method
// console.log(person1.getFullName())

console.log(person2.getFullName())
console.log(person1)