document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const selectedBank = document.getElementById("allbank").value;
    const account = document.getElementById("account").value;
    
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedAmount && convertedPin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        const mainBalance = (document.getElementById("main-balance").innerText =
          sum);
        const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
        div.classList.add("bg-green-300");
        div.innerHTML = `
        <h1> Added Money from ${selectedBank} </h1>
        <h3> ${amount}</h3>
        <p> Account Number: ${account} </p>

`;
        container.appendChild(div);
      } else {
        alert("Invalid PIN");
      }
    } else {
      alert("Invalid Input");
    }
  });
