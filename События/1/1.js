var block = document.getElementById("block");
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");


block.onmousemove = function(event){
    console.log(event.offsetY);
//    console.log(event.offsetY);
    out1.innerHTML = "Y:" + event.offsetY;
    out2.innerHTML = "X:" + event.offsetX;
    
}