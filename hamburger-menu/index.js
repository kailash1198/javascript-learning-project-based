let myMenuIcon = document.querySelector(".icon");
let myNav = document.getElementById('navlist');
let defaultStyle = myNav.style.left;
let closeBtn = document.getElementById('close-btn');
let startBtn = document.getElementById('start-btn');

closeBtn.style.display = 'none';


myMenuIcon.addEventListener('click', function() {
    myNav.style.left = "0%";
    myNav.style.transition = "all 0.5s";
    closeBtn.style.display = 'block';
    startBtn.style.display = "none";
})

closeBtn.addEventListener('click', function() {
    myNav.style.left = "-100%";
    myNav.style.transition = "all 0.5s";
    closeBtn.style.display = 'none';
    startBtn.style.display = "block";
})