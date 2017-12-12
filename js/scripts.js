function Account(name, balance, password) {
  this.name = name;
  this.balance = balance;
  this.password = password;
}

Account.prototype.transferAdd = function(amount, balance) {
  return this.balance = amount + balance;
}

Account.prototype.transferSubtract = function(amount, balance) {
  return this.balance = balance - amount;
}

function resetHelper(thing) {
  return $('input.' + thing).val("")
}

function resetFields() {
    resetHelper("name");
    resetHelper("password");
    resetHelper("initialDeposit");
    resetHelper("transfer");
}

$(document).ready(function(){
  $("form#newAccount").submit(function(event){
    event.preventDefault();
    $("#balance").empty();
    var initialDeposit = parseFloat($("input.initialDeposit").val());
    $("#balance").append("$" + initialDeposit);
    var name = $("input.name").val();
    var password = $("input.password").val();
    newAccount = new Account(name, initialDeposit, password);
    resetFields();
    $("#balance").empty();
    $("#balance").append("Welcome to the Bank of San Lorenzo, " + newAccount.name + ". Your current balance is $" + newAccount.balance);
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
    if (newAccount.balance < 0) {
      $("#balance").addClass("red");
    }
    if (newAccount.balance > 0) {
      $("#balance").removeClass("red");
    }
    $("#balance").append(newAccount.name + ", your blanace is $" + newAccount.balance);
    resetFields();
  })
})
