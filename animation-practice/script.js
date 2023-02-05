let myCard = document.getElementById('my-card');
let myCard2 = document.getElementById('my-card-2');
let myCard3 = document.getElementById('my-card-3');
myCard.style.display = 'none';
myCard2.style.display = 'none';
myCard3.style.display = 'none';

window.addEventListener('load', setTimeout(function() {
    myCard.style.display = 'block';
    myCard2.style.display = 'block';
    myCard3.style.display = 'block';

}, 1000))