function btn_increase() {
    document.getElementById("amal").innerHTML = "*";
}

function btn_subtract() {
    document.getElementById("amal").innerHTML = "-";
}

function btn_divide() {
    document.getElementById("amal").innerHTML = "/";
}

function btn_add() {
    document.getElementById("amal").innerHTML = "+";
}

function btn_residual() {
    document.getElementById("amal").innerHTML = "%"
}

function btn_sqrt() {
    document.getElementById("amal").innerHTML = "(sqrt)"
}

function btn_degree() {
    document.getElementById("amal").innerHTML = "X²"
}


// functions

    function add() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = num + num2;

        document.getElementById("result").innerHTML = result

    }
    
    function divide() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = num / num2;

        document.getElementById("result").innerHTML = result
    }
    
    function subtract() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);
        
        var result = num - num2;

        document.getElementById("result").innerHTML = result
    }
    
    function increase() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = num * num2;

        document.getElementById("result").innerHTML = result
    }

    function residual() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = num % num2;

        document.getElementById("result").innerHTML = result
    }
    
    function sqrt() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = Math.sqrt(num);
        var result2 = Math.sqrt(num2);

        document.getElementById("result").innerHTML = "(1st ==> " + result + ") and (2nd ==> " + result2 + ")"
    }
    
    function degree() {
        var num = parseInt(document.getElementById("round1").value);
        var num2 = parseInt(document.getElementById("round2").value);

        var result = num ** num2;

        document.getElementById("result").innerHTML = result

    }

function check() {
    var action = document.getElementById("amal").innerHTML;

    if(action == "+"){
        add();
    }
    else if(action == "-"){
        subtract();
    }
    else if(action == "/"){
        divide()
    }
    else if(action == "*"){
        increase()
    }
    else if(action == "%") {
        residual()
    }
    else if(action == "X²"){
        degree()
    }
    else if(action == "(sqrt)"){
        sqrt()
    }
    else{
        alert("the required action has not been entered")
    }
}