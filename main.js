$(function() {
  var myInput = $("#calculatorInput")[0];

  $("button").click(function(event) {
  	var myButton = event.target;
    console.log("myButton", myButton.id, myButton.value);
    myInput.value = myButton.value;
  });
});
