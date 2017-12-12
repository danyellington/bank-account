

$(document).ready(function(){
  $("form#newAccount").submit(function(event){
    event.preventDefault();
    $("#balance").empty();
    var initialDeposit = $("input.initialDeposit").val();
    $("#balance").append("$" + initialDeposit);
  })
  $("form#transaction").submit(function(event){
    event.preventDefault();
  })
})
