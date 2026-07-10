const billAmount = document.querySelector('#number');

const firstTip = document.querySelector('#first-tip');
const secondTip = document.querySelector('#second-tip');
const thirdTip = document.querySelector('#third-tip');

const totalBill = document.querySelector('#total-bill');
const message = document.querySelector('#message');

function totalTip(event) {
  const convert = Number(billAmount.value);

  if (convert <= 0) {
    alert("Please Input a Valid Amount")
  } else if (firstTip === event.target) {
    const tip = convert * .10;
    totalBill.textContent = tip + convert;
  } else if (secondTip === event.target) {
    const tip = convert * .20;
    totalBill.textContent = tip + convert;
  } else if (thirdTip === event.target) {
    const tip = convert * .30;
    totalBill.textContent =  tip + convert;
  }
  
};



firstTip.addEventListener("click", totalTip);
secondTip.addEventListener("click", totalTip);
thirdTip.addEventListener("click", totalTip);
