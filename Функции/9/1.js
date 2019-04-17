document.getElementById("ok").onclick = f1;
document.getElementById("out2").onclick = f2;
var out = document.getElementById("out");
var m1 = [];
function f1(){
    var text = document.getElementById("text").value;
    m1.push("text");
    console.log(m1);
    }

function f2 (){
    if (m1.length == 0){
        alert ("Array is empty");
    }
    else {
    out.innerHTML = "Array contain " + m1.length + " elements.";
    }
}
