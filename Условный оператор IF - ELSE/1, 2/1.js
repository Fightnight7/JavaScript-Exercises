document.getElementById("test").onclick = f1;

function f1 (){
    var x = document.getElementById("in1").value;
    var y = document.getElementById("in2").value;
    if (x > y) {
        out.innerHTML = x;
    }
    else if (y > x){
        out.innerHTML = y;
    }
    else {
        out.innerHTML = "Числа равны";
    }
}