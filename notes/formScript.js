// Form script

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    // console.log(nameInput.value)
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields')
        msg.classList.add('error') // add style
        msg.innerHTML = 'Please enter all fields' // add text

        // to make it dissapear after 3 seconds
        setTimeout(() => msg.remove(), 3000)

    } else {
        // console.log('success')

        // Make it so it will add user info onto the list 
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
        
        userList.appendChild(li)

        // Clear the fields
        nameInput.value = ''
        emailInput.value = ''
    }
}