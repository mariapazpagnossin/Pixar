'use strict';
var icon = document.querySelector('.header__menumovil');
var nav = document.querySelector('.header__nav');
icon.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
