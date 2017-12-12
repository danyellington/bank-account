var balance = 0;

var transfer = function(amount, balance) {
  return amount + balance;
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
    var newBalance = transfer(amount, balance);
    balance = newBalance;
    $("#balance").append("$" + newBalance)
  })
})
