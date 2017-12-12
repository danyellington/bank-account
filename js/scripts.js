var accountArray = [];

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
    var initialDeposit = parseFloat($("input.initialDeposit").val());
    var name = $("input.name").val();
    var password = $("input.password").val();
    if (name && password && initialDeposit){
      newAccount = new Account(name, initialDeposit, password);
      accountArray.push(newAccount);
      $("#balance").empty();
      $("#balance").append("Welcome to the Bank of San Lorenzo, " + newAccount.name + ". Your current balance is $" + newAccount.balance);
      resetFields();
    } else {
      alert("Please fill out all fields");
    };
  })
  $("form#transaction").submit(function(event){
    event.preventDefault();
    console.log(newAccount.balance);
    $("#balance").empty();
    var nameEntry = $("input.nameEntry").val();
    var passwordEntry = $("input.passwordEntry").val();
    var amount = parseFloat($("input.transfer").val());
    var transferType = $("input:radio[name=transaction]:checked").val();
    accountArray.forEach(function(value){
      if (value.name === nameEntry && value.password === passwordEntry) {
        if (amount <= 0) {
          alert("Please enter a number greater than 0");
        } else if (!amount) {
          alert("We don't understand your input. Please enter a number greater than 0")
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
      } else {
        alert("Invalid name or password");
        $("#balance").append("Welcome to the Bank of San Lorenzo!");
      }
      resetFields();
    });
  })
})
