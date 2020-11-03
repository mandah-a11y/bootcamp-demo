function add() {
    var y = document.getElementById("addends").value;
    var z = document.getElementById("terms").value;
    var x = Number(y) + Number(z);
    document.getElementById("sum").innerHTML = x;
  }