const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const btn = document.querySelector('button');
const message = document.querySelector("#pass-check");


btn.addEventListener('click', (e) => {
    if(password.value.length != 0) {
        if(password.value !== confirmPassword.value) {
            displayError('*Password do not match', e);
        }
    } else {
        displayError('*Please enter password', e);
    }
});

function displayError(error, event) {
    event.preventDefault();
    message.textContent = error;
    message.setAttribute('style', 'color: red;');
}