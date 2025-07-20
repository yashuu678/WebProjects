function press(val) {
  document.getElementById("display").value += val;
}

function clr() {
  document.getElementById("display").value = "";
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}