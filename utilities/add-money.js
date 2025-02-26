document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const selectedBank = document.getElementById("allbank").value;

    const value = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account").value;
    const mainBalance = getInnerTextByID("main-balance");
    if (value < 0) {
      alert("amount number must be positive");
      return;
    }

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + value;
        // document.getElementById('main-balance').innerText=sum;
        setInnerTextByIdandValue("main-balance", sum);

        const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
        div.classList.add("bg-green-300");
        div.innerHTML = `
        <h1> Added Money from ${selectedBank} </h1>
        <h3> ${value}</h3>
        <p> Account Number: ${account} </p>

`;
        container.appendChild(div);
      }
    } else {
      alert("Input Invalid");
    }
  });
