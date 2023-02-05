let logInCard = document.getElementById('logIn');
let signUpCard = document.getElementById('signUp');
let logInBtn1 = document.getElementById('log-in-btn-1');
let signUpBtn1 = document.getElementById('sign-up-btn-1');
let logInBtn2 = document.getElementById('log-in-btn-2');
let signUpBtn2 = document.getElementById('sign-up-btn-2');

logInCard.style.display = 'block';
signUpCard.style.display = 'none';


signUpBtn1.addEventListener('click', showSignUpCard);
logInBtn1.addEventListener('click', showLoginCard);

signUpBtn2.addEventListener('click', showSignUpCard);
logInBtn2.addEventListener('click', showLoginCard);

function showSignUpCard() {
    logInCard.style.display = 'none';
    signUpCard.style.display = 'block';
}

function showLoginCard() {
    logInCard.style.display = 'block';
    signUpCard.style.display = 'none';
}