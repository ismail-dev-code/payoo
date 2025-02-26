document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = getInputValueByID("cashout-amount");

    const pinCashOut = getInputValueByID("pin-cash-out");
    const mainBalance = getInnerTextByID("main-balance");

    if (agentNumber.length === 11) {
      if (pinCashOut.length === 1234) {
        const sum = mainBalance - cashOutAmount;
        setInnerTextByIdandValue("main-balance", sum);
        const container = document.getElementById("transaction-container");
        const p = document.createElement("p");
        p.innerText = `
          added ${value} from ${account} account
          
          `;
        container.appendChild(p);
      } else {
        alert("sorry!! pin is not valid");
      }
    } else {
      alert("sorry!! your agent number is not valid");
    }
  });
