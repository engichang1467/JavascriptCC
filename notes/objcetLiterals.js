// Object Literals - key value pair

const person = {
    firstName: 'Mike',
    lastName: 'Liu',
    age: 20,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// get everything
console.log(person);

// get specific value
// get first name and last name
console.log(person.firstName, person.lastName)

// get movies in hobbies within the object
console.log(person.hobbies[1])

// get city
console.log(person.address.city)

// put object's data into a variables
const { firstName, lastName, address: { city } } = person;

console.log(firstName)
console.log(city)

// Add new properties into the object
person.email = 'mliu@gmail.com'
console.log(person)