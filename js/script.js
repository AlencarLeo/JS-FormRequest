const btn = document.getElementById('btn');

function handleError(event){
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const labelEmail = document.querySelector('.email-label');
    const labelPassword = document.querySelector('.password-label');

    if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1 || email.value.indexOf('.') == email.value.length || email.value.indexOf('@') == email.value.length){
        labelEmail.classList.add('error');
        email.classList.add('error'); 
    }
    if(email.value != '' && email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1 && email.value.indexOf('.') - email.value.indexOf('@') > 1 && email.value.indexOf('.') != email.value.length && email.value.indexOf('@') != email.value.length){
        labelEmail.classList.remove('error');
        email.classList.remove('error'); 
    }

    if(password.value == '' || password.value.length < 8){
        labelPassword.classList.add('error');
        password.classList.add('error');
    }
    if(password.value != '' && password.value.length >= 8){
        labelPassword.classList.remove('error');
        password.classList.remove('error');
    }
}

btn.addEventListener('click', handleError);