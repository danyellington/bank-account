var balance = 0;

var transferAdd = function(amount, balance) {
  return amount + balance;
}

var transferSubtract = function(amount, balance) {
  return balance - amount;
}

$(document).ready(function(){
  $("form#newAccount").submit(function(event){
    event.preventDefault();
    $("#balance").empty();
    var initialDeposit = parseFloat($("input.initialDeposit").val());
    $("#balance").append("$" + initialDeposit);
    balance = initialDeposit;
  })
  $("form#transaction").submit(function(event){
    event.preventDefault();
    $("#balance").empty();
    var amount = parseFloat($("input.transfer").val());
    var transferType = $("input:radio[name=transaction]:checked").val();
    if (amount <= 0) {
      alert("Please enter a number greater than 0");
    } else if (transferType === "deposit") {
      var newBalance = transferAdd(amount, balance);
      balance = newBalance;
    } else if (transferType === "withdrawl") {
      var newBalance = transferSubtract(amount, balance);
      balance = newBalance;
    } else {
      console.log("fuck");
    }
    $("#balance").append("$" + balance);
  })
})
