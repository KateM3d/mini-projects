// 2. Доработать форму регистрации из прошлых заданий, сделав для нее валидацию через JS.

function check() {

    let firstName = document.getElementById('firstName');
    let midName = document.querySelector('#midName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');


    let message = document.querySelector('#errorMessage');
    message.innerHTML = '';



    if (!isFormValid(firstName, midName, lastName, email, password)) {
        message.innerHTML += 'Oops! your are missing something! <br> Please make sure all the info is provided'
    } else if (!validateEmail()) {
        alert("Invalid email entry, please try again")
    } else {

        Swal.fire({
            title: 'Awesome!',
            text: `${firstName.value} ${lastName.value} Welcome to the Magic World!`,
            imageUrl: 'https://images.unsplash.com/photo-1600986600826-aa5b82e73a65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'image',
        });
    }
}


function isValidEntry(info) {
    return info.value.trim() !== "";
}

function isFormValid(firstName, midName, lastName, email, password) {

    return isValidEntry(firstName) && isValidEntry(midName) && isValidEntry(lastName) && isValidEntry(email) && isValidEntry(password)
}

function validateEmail() {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (email.value.match(mailFormat)) {
        return true;
    } else {

        return false;
    }
}