setInterval(myTimer, 1000)

function myTimer() {
  const currentDate = new Date();
  const hours12 = currentDate.getHours();
  const convertHours = (hours12 % 12) || 12;

  document.querySelector('#hours').innerHTML = String(convertHours).padStart(2, '0');
  document.querySelector('#minutes').innerHTML = String(currentDate.getMinutes()).padStart(2, '0');
  document.querySelector('#seconds').innerHTML = String(currentDate.getSeconds()).padStart(2, '0');

  if (hours12 >= 12) {
    document.querySelector('#am-pm').innerHTML = 'PM';
  } else {
    document.querySelector('#am-pm').innerHTML = 'AM';
  }
}