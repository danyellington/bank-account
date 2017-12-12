function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.transferAdd = function(amount, balance) {
  return this.balance = amount + balance;
}

Account.prototype.transferSubtract = function(amount, balance) {
  return this.balance = balance - amount;
}

$(document).ready(function(){
  $("form#newAccount").submit(function(event){
    event.preventDefault();
    $("#balance").empty();
    var initialDeposit = parseFloat($("input.initialDeposit").val());
    $("#balance").append("$" + initialDeposit);
    var name = "Poop";
    newAccount = new Account(name, initialDeposit);
    balance = initialDeposit;
  })
  $("form#transaction").submit(function(event){
    event.preventDefault();
    console.log(newAccount.balance);
    $("#balance").empty();
    var amount = parseFloat($("input.transfer").val());
    var transferType = $("input:radio[name=transaction]:checked").val();
    if (amount <= 0) {
      alert("Please enter a number greater than 0");
    } else if (transferType === "deposit") {
      newAccount.transferAdd(amount, newAccount.balance);
      //balance = newBalance;
    } else if (transferType === "withdrawl") {
      newAccount.transferSubtract(amount, newAccount.balance);
      //balance = newBalance;
    } else {
      console.log("fuck");
    }
    $("#balance").append("$" + newAccount.balance);
  })
})
