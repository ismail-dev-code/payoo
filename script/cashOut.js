document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const pinCashOut = document.getElementById("pin-cash-out").value;

    const convertedPinCashOut = parseInt(pinCashOut);
    const cashOutAgent = document.getElementById("agent-number").value;
    const convertedAgentNum = parseInt(cashOutAgent);
    // console.log(typeof convertedAgentNum);
    const cashOutAmount = document.getElementById("cashout-amount").value;
    const convertedCashOutAmount = parseFloat(cashOutAmount);
    const mainBalanceCashOut =
      document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalanceCashOut);
    if (cashOutAmount > mainBalanceCashOut) {
      alert("Invalid Amount");
      return;
    }

    if (cashOutAmount && pinCashOut) {
      if (convertedPinCashOut === 1234) {
        const substract = convertedMainBalance - convertedCashOutAmount;
        document.getElementById("main-balance").innerText = substract;

        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
          withdrawal successfully ${convertedCashOutAmount} from this ${convertedAgentNum} account
          
          `;
        container.appendChild(p);
      } else {
        alert("Invalid PIN");
      }
    } else {
      alert("Invalid Input");
    }
  });
