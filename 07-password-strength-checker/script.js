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

if (password.value.trim() === "") {
  passwordResult.textContent = "No password";
  styleRemove();
  passwordResult.classList.add('no-password');
}

password.addEventListener('input', () => {
  if (password.value.trim() === "") {
    passwordResult.textContent = "No password";
    styleRemove();
    passwordResult.classList.add('no-password');
  } else if (password.value.length > 8 && specialChar.test(password.value) && /[A-Z]/.test(password.value)) {
    passwordResult.textContent = "Strong";
    styleRemove();
    passwordResult.classList.add('pass-strong');
  } else if (password.value.length > 6 && specialChar.test(password.value)) {
    passwordResult.textContent = "Medium";
    styleRemove();
    passwordResult.classList.add('pass-medium');
  } else if (password.value.length <= 6 ) {
    passwordResult.textContent = "Weak";
    styleRemove();
    passwordResult.classList.add('pass-weak');
  }
})

function styleRemove() {
  passwordResult.classList.remove('pass-weak');
  passwordResult.classList.remove('pass-medium');
  passwordResult.classList.remove('pass-strong');
  passwordResult.classList.remove('no-password');
}