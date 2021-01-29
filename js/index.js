'use strict'

// Cuando hago CLICK en ".fas" a ".nav" toggle ".ver"

const icono = document.querySelector('.fas')
const nav = document.querySelector('.nav')

icono.addEventListener('click',function(){
    nav.classList.toggle('ver')
})