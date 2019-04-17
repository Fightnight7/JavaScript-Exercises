document.getElementById("find").onclick = f1;

function f1(){
    //document.getElementById("out").style.textDecoration = "underline";
    var x = document.getElementById("test").value;
    if (x == "p"){
        var m = document.getElementsByTagName("p");
        console.log(m);  
        for (var i=0; i<m.length; i++){
        m[i].style.textDecoration = "underline";
        }}
    else if (x == "div") {
        var m = document.getElementsByTagName("div");
        for (var i=0; i<m.length; i++){
        m[i].style.textDecoration = "underline"; 
        }}
     else if (x == "span"){
        var m = document.getElementsByTagName("span");
        for (var i=0; i<m.length; i++){
        m[i].style.textDecoration = "underline";
    }
    }
}

