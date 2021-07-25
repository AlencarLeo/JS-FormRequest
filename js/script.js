const btn = document.getElementById('btn');

function handleError(event){
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const labelEmail = document.querySelector('.email-label');
    const labelPassword = document.querySelector('.password-label');
    
    const notficationEmail = document.querySelector('.email-notfication');
    const notficationPassword = document.querySelector('.password-notfication');

    if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1 || email.value.indexOf('.') == email.value.length || email.value.indexOf('@') == email.value.length){
        labelEmail.classList.add('error');
        email.classList.add('error');

        notficationEmail.classList.add('active');
    }
    if(email.value != '' && email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1 && email.value.indexOf('.') - email.value.indexOf('@') > 1 && email.value.indexOf('.') != email.value.length && email.value.indexOf('@') != email.value.length){
        labelEmail.classList.remove('error');
        email.classList.remove('error');
        
        notficationEmail.classList.remove('active');
    }

    if(password.value == '' || password.value.length < 8){
        labelPassword.classList.add('error');
        password.classList.add('error');

        notficationPassword.classList.add('active');
    }
    if(password.value != '' && password.value.length >= 8){
        labelPassword.classList.remove('error');
        password.classList.remove('error');

        notficationPassword.classList.remove('active');
    }
}

btn.addEventListener('click', handleError);