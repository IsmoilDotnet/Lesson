document.getElementById("round1").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("round2").innerHTML = Math.floor(Math.random() * 100) + 1;

function refresh() {
    document.getElementById("round1").innerHTML = Math.floor(Math.random() * 100) + 1;
    document.getElementById("round2").innerHTML = Math.floor(Math.random() * 100) + 1;
}

function check() {
    var num = parseInt(document.getElementById("round1").innerHTML);
    var num2 = parseInt(document.getElementById("round2").innerHTML);
    var res = parseInt(document.getElementById("result").value);

    var real = num + num2;

    if (num + num2 === res) {
        alert("Correct");
    } else {
        alert("Incorrect the result should be ==> " + real);
    }
}
