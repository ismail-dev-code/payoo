document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money", "block");
  handleToggle("cashout", "none");
});

document.getElementById("cashout-box").addEventListener("click", function () {
    handleToggle("add-money", "none");
  handleToggle("cashout", "block");
});

