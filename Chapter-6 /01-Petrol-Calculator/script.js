function calc() {

  // get values
  var p = document.getElementById("price").value;
  var l = document.getElementById("liters").value;

  // multiply
  var total = p * l;

  // show
  document.getElementById("result").innerHTML = "Total: " + total;

}
