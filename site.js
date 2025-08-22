// Exercise 1
const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'

// Exerecise 2
// const footer = (document.querySelector('footer a')).style.textDecoration = 'underline'
const fork = (document.querySelector('#fork')).style.textDecoration = 'underline'






// by getElementId
const aboutA = (document.getElementById('about')).style.color = 'blue'

// by querySelector; querySelector grabs the first element that matches the query
const contactA = document.querySelector('#contact') // Id's use #
contactA.style.color = 'purple'
// Classes use . a.active targets anchors with the class of 'active'
// h2.active would target h2's with a class of 'active'
// section .active looks in 'section' for an 'active' class anywhere within that section
// section > .active looks at the child of section, so directly following
//      <section><div><h1>jnfdgksd</h1></div></section> = div
const activeA = document.querySelector('a.active') 
activeA.style.color = 'green'

// Add border to each element with 'active' class
const activeElements = document.querySelectorAll('.active')
activeElements.forEach(el => el.style.border = '1px solid black')

document.body.style.backgroundColor = 'silver'

const contact = document.querySelector('#contact')
contact.addEventListener('mouseover', () => {
    //contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue'
})
