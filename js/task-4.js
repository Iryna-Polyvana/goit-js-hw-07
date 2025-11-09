const refs = {
    loginForm: document.querySelector('.login-form'),
}
const loginFormSubmit = event => {
    event.preventDefault();

    const loginFormData = {
        email: refs.loginForm.elements.email.value.trim(),
        password: refs.loginForm.elements.password.value.trim(),
    };

    const loginFormDataValue = Object.values(loginFormData);
    if (loginFormDataValue.includes('')) {
        alert('All form fields must be filled in')
        return;
    }

    console.log(loginFormData);
    refs.loginForm.reset();
};
refs.loginForm.addEventListener('submit', loginFormSubmit)

