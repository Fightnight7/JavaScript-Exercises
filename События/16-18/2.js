var img = document.getElementById("img");
img.onmouseover = f1;
img.onmouseout = f2;

function f1 (){
    img.style.zoom = "140%";
}

function f2 (){
    img.style.zoom = "100%";
}

