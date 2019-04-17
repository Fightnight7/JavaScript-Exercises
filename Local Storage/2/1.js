document.getElementById("blue").onclick = f1;
document.getElementById("red").onclick = f2;
var out = document.getElementById("out");

function f1(){
    out.innerHTML = "<link rel='stylesheet' href='style1.css'>";
    localStorage.setItem("style", "css1");
}

function f2(){
    out.innerHTML = "<link rel='stylesheet' href='style2.css'>";
    localStorage.setItem("style", "css2");
}

window.onload = function(){
    if (localStorage.getItem("style") =="css1"){
        out.innerHTML = "<link rel='stylesheet' href='style1.css'>";
    }
    else if (localStorage.getItem("style") == "css2"){
        out.innerHTML = "<link rel='stylesheet' href='style2.css'>";
    }
}