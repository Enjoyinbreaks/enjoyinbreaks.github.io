function Add() {
  console.log("Coded by Harsh Goyenka")
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 + number2;
  }
}

function Subtract() {
  console.log("Coded by Harsh Goyenka")
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 - number2;
  }
}

function Multiply() {
  console.log("Coded by Harsh Goyenka")
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 * number2;
  }
}

function Divide() {
  console.log("Coded by Harsh Goyenka")
  var number1 = parseInt(document.getElementById("firstnumber").value);
  var number2 = parseInt(document.getElementById("secondnumber").value);
  if (isNaN(number1 * number2)) {
    alert("Please Check your numbers!");
  } else {
    document.getElementById("output").innerHTML = number1 / number2;
  }
}

function Delete() {
  console.log("Coded by Harsh Goyenka")
  document.getElementById("output").innerHTML = " ";
}

function Reset() {
  console.log("Coded by Harsh Goyenka")
  document.getElementById("firstnumber").value = " ";
  document.getElementById("secondnumber").value = " ";
  document.getElementById("output").innerHTML = " ";
}
