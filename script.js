const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-form');
const firstNameError = document.getElementById('firstNameError');

firstName.addEventListener('input', (e) =>{
  if (firstName.value.length >= 3) {
    firstName.classList.add('valid');
    firstName.classList.remove('invalid');
  }
  else {
    firstName.classList.add('invalid');
    firstName.classList.remove('valid');
  }
});

lastName.addEventListener('input', (e) =>{

  if (lastName.value.length >= 3) {
    lastName.classList.add('valid');
    lastName.classList.remove('invalid');
  }
  else {
    lastName.classList.add('invalid');
    lastName.classList.remove('valid');
  }
});



password.addEventListener('change', (e) => {
  if (password.value.length >= 4) {
    password.classList.add('valid');
    password.classList.remove('invalid');
  }
  else {
    password.classList.add('invalid');
    password.classList.remove('valid');
  }
});

confirmPassword.addEventListener('change', (e) => {
  if (confirmPassword.value.length >= 4 && confirmPassword.value == password.value) {
    confirmPassword.classList.add('valid');
    confirmPassword.classList.remove('invalid');
  }
  else {
    confirmPassword.classList.add('invalid');
    confirmPassword.classList.remove('valid');
  }
});