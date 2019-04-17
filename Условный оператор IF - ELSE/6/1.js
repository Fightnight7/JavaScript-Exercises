//document.getElementById("check").onclick = f1;
var out = document.getElementById("out");
var m1 = ["0%", "10%", "20%", "25%"];

function f1(){
    var x = document.getElementById("year").value;
    if ( x >= 0 && x < 3) {
        out.innerHTML = m1[0];
    }
    else if ( x >=3 && x < 10) {
        out.innerHTML = m1[1];
    }
    else if ( x >=10 && x < 20) {
        out.innerHTML = m1[2];
    }
    else if ( x>20 ){
        out.innerHTML = m1[3];
    }
    else {
        out.innerHTML = "Number incorrect";
        f2();
    }
    function f2(){
        document.getElementById("year").value ="";
    }
}