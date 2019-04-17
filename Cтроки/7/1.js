var out = document.getElementById("out");

function f1(){
    var code = document.getElementById("code").value;
    console.log(String.fromCharCode(parseInt((code), 16)));
    out.innerHTML += (String.fromCharCode(parseInt((code), 16)) + "<br>");
    
}