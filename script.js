const btns = document.querySelectorAll('.card-buttons button');
const sections = document.querySelectorAll('.card-section');
const card = document.querySelectorAll('.card-main');
const cardAboutElement = document.getElementById('about');
const cardExperienceElement = document.getElementById('experience');
const cardContactElement = document.getElementById('contact');
var currentCardActiveId = 'about'

function changePage(event,page) {
    const currentElementActive = document.getElementById(currentCardActiveId)
    const currentElementMenuActive = document.querySelector(`[data-section="${currentCardActiveId}"]`)
    
    currentElementActive?.classList.remove("active")
    currentElementMenuActive?.classList.remove("active")
 
    if (page == 'about') {
        cardAboutElement.classList.add("active");
    event.classList.add('active')

        currentCardActiveId = "about"

        return
    }
    if (page == 'experience') {
        cardExperienceElement.classList.add("active");
        event.classList.add('active')

        currentCardActiveId = "experience"

        return
    }
    cardContactElement.classList.add("active");
    event.classList.add('active')
    currentCardActiveId = "contact"
    
    }


