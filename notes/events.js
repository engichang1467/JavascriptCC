// Events

const btn = document.querySelector('.btn')

// 'click' - user have to click the button
// 'mouseover' - require user to hover the button
// 'mouseout' - user click and exit the button
btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
    console.log('Click')
    console.log(e) // output the event

    // to get the actual element
    console.log(e.target)

    // to get the class name, or getting any attribute
    console.log(e.target.className)

    // Change some stuff up
    // change the background color of the login page
    document.querySelector('#my-form').style.background = '#ccc'

    // add new class
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
})
