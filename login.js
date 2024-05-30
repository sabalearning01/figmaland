
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const agreeCheckbox = document.getElementById('confirm');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        emailError.style.display = 'block';
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('error');
    }

    if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
        passwordInput.classList.add('error');
        isValid = false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('error');
    }

    if (!agreeCheckbox.checked) {
        isValid = false;
    }

    submitBtn.disabled = !isValid;
}

form.addEventListener('input', validateForm);

form.addEventListener('create', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
};