const mode = document.querySelector('.mode');
const body = document.querySelector('body');
const text = document.querySelector('.text');

mode.onclick = function() {
    body.classList.toggle('gelap');
 }