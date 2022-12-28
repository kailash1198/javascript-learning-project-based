let imageOne = document.getElementById('img-one');
let imageTwo = document.getElementById('img-two');
let imageThree = document.getElementById('img-three');

imageOne.addEventListener('mouseover', function() {
    imageOne.style.transform = "scale(1.05,1.05)";
    imageOne.style.transition = "all 0.5s";
})
imageOne.addEventListener('mouseout', function() {
    imageOne.style.transform = "scale(1,1)";
    imageOne.style.transition = "all 0.5s";
})




imageTwo.addEventListener('mouseover', function() {
    imageTwo.style.transform = "scale(1.05,1.05)";
    imageTwo.style.transition = "all 0.5s";
})
imageTwo.addEventListener('mouseout', function() {
    imageTwo.style.transform = "scale(1,1)";
    imageTwo.style.transition = "all 0.5s";
})





imageThree.addEventListener('mouseover', function() {
    imageThree.style.transform = "scale(1.05,1.05)";
    imageThree.style.transition = "all 0.5s";
})
imageThree.addEventListener('mouseout', function() {
    imageThree.style.transform = "scale(1,1)";
    imageThree.style.transition = "all 0.5s";
})