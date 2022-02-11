function Add() {
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 + number2;
  }
}

function Subtract() {
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 - number2;
  }
}

function Multiply() {
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 * number2;
  }
}

function Divide() {
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 / number2;
  }
}

function Delete() {
  document.getElementById("output").innerHTML = " ";
}

function Reset() {
  document.getElementById("firstnumber").value = " ";
  document.getElementById("secondnumber").value = " ";
  document.getElementById("output").innerHTML = " ";
}
