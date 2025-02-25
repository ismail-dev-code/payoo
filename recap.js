document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const mainAmount = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainAmount);

    if (convertedAmount && convertedPin) {
     if(convertedPin===1234){
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById("main-balance").innerText = sum;
     }
     else{
        alert('Invalid PIN')
     }
    }
    else{
        alert('Invalid Input')
    }
  });
