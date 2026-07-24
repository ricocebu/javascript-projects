const password = document.querySelector('#input-password');
const passwordResult = document.querySelector('#result-password');
const passwordShow = document.querySelector('#input-show-password');

passwordShow.addEventListener('click', () => {
  if (password.type === 'password') {
    password.type = 'text';
    passwordShow.src = 'images/hide.png';
  } else {
    password.type = 'password';
    passwordShow.src = 'images/show.png';
  }
})

