// DOM Manipulation

const ul = document.querySelector('.items')

// To remove a item
// ul.remove()

// remove the last item
// ul.lastElementChild.remove()

// edit content
ul.firstElementChild.textContent = 'Hello'

// get 2nd one
// Change the 2nd item inner text to 'Brad'
ul.children[1].innerText = 'Brad'

// Add new html style
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// to change style
// In this case, change the color of the submit button to red
const btn = document.querySelector('.btn')
btn.style.background = 'red'
