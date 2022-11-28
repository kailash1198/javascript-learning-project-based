let openBtn = document.getElementById('open-button');
let closeBtn = document.getElementById('close-buttun');

let myModalBox = document.getElementById('modal');
let myBodySec = document.getElementById('header');

myModalBox.style.display = 'none';
openBtn.addEventListener('click', function() {
    myModalBox.style.display = 'block';
    myBodySec.style.backgroundColor = 'red';
})

closeBtn.addEventListener('click', function() {
    myModalBox.style.display = 'none';
    myBodySec.style.backgroundColor = 'transparent';
})