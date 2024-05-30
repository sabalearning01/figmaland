
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const agreeCheckbox = document.getElementById('confirm');
// const submitBtn = document.getElementById('createBtn');

// const nameError = document.getElementById('nameError');
// const emailError = document.getElementById('emailError');
// const passwordError = document.getElementById('passwordError');

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validateForm(e) {
    e.preventDefault()
    const nameInputValue = nameInput.value.trim()
    const emailValue = emailInput.value.trim()
    const passwordValue = passwordInput.value.trim()
    const checkboxValue = agreeCheckbox.value.trim()
    // let isValid = false;
    console.log(nameInputValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(checkboxValue);

    if (nameInputValue === '') {
        const nameParent = nameInput.parentElement
        nameParent.classList.add('error')
        const span = nameParent.querySelector('span')
        span.textContent = 'Name cannot be empty'
    } else {
        const nameParent = nameInput.parentElement
        nameParent.classList.add('success')
    }


    if (emailValue === ''){
        const mailParent1 = emailValue.parentElement
        mailParent1.classList.add('error')
        const spanerr = mailParent1.querySelector('span')
        spanerr.textContent = 'email cannot be empty and less than eight'
    }else{
        const mailParent1 = emailValue.parentElement
        mailParent1.classList.add('sucess')
        
    }


    // if (nameInput.value.trim() === '') {
    //     nameError.style.display = 'block';
    //     nameInput.classList.add('error');
    //     isValid = true;
    // } else {
    //     nameError.style.display = 'none';
    //     nameInput.classList.remove('error');
    // }

    // if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
    //     emailError.style.display = 'block';
    //     emailInput.classList.add('error');
    //     isValid = true;
    // } else {
    //     emailError.style.display = 'none';
    //     emailInput.classList.remove('error');
    // }

    // if (passwordInput.value.trim() === '') {
    //     passwordError.style.display = 'block';
    //     passwordInput.classList.add('error');
    //     isValid = true;
    // } else {
    //     passwordError.style.display = 'none';
    //     passwordInput.classList.remove('error');
    // }

    // if (!agreeCheckbox.checked) {
    //     isValid = true;
    // }

    // createBtn.disabled = !isValid;
}

form.addEventListener('submit', validateForm);

// form.addEventListener('create', function(event) {
//     event.preventDefault();
//     if (validateForm()) {
//         alert('Form submitted successfully!');
// }
