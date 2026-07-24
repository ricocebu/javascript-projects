const password = document.querySelector('#input-password');
const passwordResult = document.querySelector('#result-password');
const passwordShow = document.querySelector('#input-show-password');
const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

passwordShow.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    passwordShow.src = 'images/hide.png';
  } else {
    password.type = 'password';
    passwordShow.src = 'images/show.png';
  }
})

password.addEventListener('input', () => {
  if (password.value.length <= 6 ) {
    passwordResult.textContent = "Password too weak";
  }  if (password.value.length > 8 && specialChar.test(password.value) && /[A-Z]/.test(password.value)) {
    passwordResult.textContent = "Secured";
  } else if (password.value.length > 6 && specialChar.test(password.value)) {
    passwordResult.textContent = "Medium";
  } else if (password.value.length <= 6 ) {
    passwordResult.textContent = "Password too weak";
  }  
})