function addNameToTable() {
  var ism = document.getElementById("result").value;
 
  if (ism) {
    var table = document.getElementById("Table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = ism;
    

    document.getElementById("result").value = "";
  } else {
    alert("Ismni kiriting!");
  }
}