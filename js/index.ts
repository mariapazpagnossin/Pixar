'use strict'

const icon = (document.querySelector('.header__menumovil') as HTMLElement)
const nav = (document.querySelector('.header__nav') as HTMLElement)

icon.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
})


