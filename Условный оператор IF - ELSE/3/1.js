document.getElementById("test").onclick = f1;

function f1(){
    var x = document.getElementById("num1").value;
    if (x >= 1 &&  x <= 20) {
        out.innerHTML = "Ваша квартира находиться в первом подьезде.";
    }
    else if (x >= 21 &&  x <= 48) {
        out.innerHTML = "Ваша квартира находиться во втором подьезде.";
    }
    else if (x >= 49 &&  x <= 90) {
        out.innerHTML = "Ваша квартира находиться в третьем подьезде.";
    }
    else {
        out.innerHTML = "Квартиры с таким номером нет, введите квартиру в диапозоне 1-90";
        f2();
    }
}

function f2 (){
    //var x = document.getElementById("num1").value;
    document.getElementById("num1").value = "";
}