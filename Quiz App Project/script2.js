const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const regBtn = document.querySelector('.reg-btn');
// const emailInput = document.querySelector('.email');
// const passwordInput = document.querySelector('.password');
// const registerBtn = document.querySelector('register-btn');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

regBtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// emailInput.addEventListener('input', validateForm);
// passwordInput.addEventListener('input', validateForm);

// function validateForm() {
//     const emailValue = emailInput.value;
//     const passwordValue = passwordInput.value;

//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
//     const isPasswordValid = passwordValue.length >= 8;

//     if (isEmailValid && isPasswordValid) {
//         registerBtn.removeAttribute('disabled');
//     } else {
//         registerBtn.setAttribute('disabled', 'true');
//     }
// }
