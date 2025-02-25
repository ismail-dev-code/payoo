document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pinCashOut = document.getElementById("pin-cash-out").value;

    const convertedPinCashOut = parseInt(pinCashOut);
    const cashOutAmount = document.getElementById("cashout-amount").value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);
    const mainBalanceCashOut =
      document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalanceCashOut);

    if (cashOutAmount && pinCashOut) {
      if (convertedPinCashOut === 1234) {
        const substract = convertedMainBalance - convertedCashOutAmount;
        document.getElementById("main-balance").innerText = substract;
      } else {
        alert("Invalid PIN");
      }
    } else {
      alert("Invalid Input");
    }
  });
