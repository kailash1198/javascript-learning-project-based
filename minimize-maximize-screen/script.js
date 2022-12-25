let openWindowBtn = document.getElementById('open-window');

let windowBox = document.getElementById('window');
let fullWindthWindow = document.getElementById('full-width');

let normalWidthWindow = document.getElementById('normal-width');

normalWidthWindow.style.display = 'none';

windowBox.style.display = 'none';


openWindowBtn.addEventListener('click', function() {
    windowBox.style.display = 'block';
})

fullWindthWindow.addEventListener('click', function() {
    windowBox.style.width = "100%";
    windowBox.style.height = "70%";

    fullWindthWindow.style.display = 'none';

    normalWidthWindow.style.display = 'block';
})

normalWidthWindow.addEventListener('click', function() {
    windowBox.style.width = "40%";
    windowBox.style.height = "40%";
    normalWidthWindow.style.display = 'none';
    fullWindthWindow.style.display = 'block';
})