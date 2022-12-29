let myCardOne = document.getElementById('card-one');


let myContent = document.getElementById('content');
let myHeadingTag = document.getElementById('my-heading');
let myParaTag = document.getElementById('my-para');

let myContentParaTag = document.getElementById('content-para');

myCardOne.addEventListener('mouseover', function() {
    myContent.style.display = 'block';
    myHeadingTag.style.display = 'none';
    myParaTag.style.display = 'none';
    myContent.style.color = 'black';
    myContentParaTag.style.transform = 'rotateX(180deg)';
    myContentParaTag.style.color = 'white';
    myContentParaTag.style.textAlign = 'center';
})
myCardOne.addEventListener('mouseout', function() {
    myContent.style.display = 'none';
    myHeadingTag.style.display = 'block';
    myParaTag.style.display = 'block';
})