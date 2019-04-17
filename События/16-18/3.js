var img = document.getElementById("img");
var body = document.getElementById("body");
img.onclick = f1;
var x = 0;

function f1(){
    if (x==0){
    img.style.position ="absolute";
    img.style.width ="800px";
    body.style.boxShadow = "0px 400px 1000px 400px";
    x = 1;   
    }
    else if (x==1){
    img.style.position ="static";
    img.style.width ="500px";
    body.style.boxShadow = "0px 0px 0px 0px";
    x=0;
    }
}

