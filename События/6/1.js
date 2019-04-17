var y = 1;
function f1(){
    var block = document.getElementById("block");
    if (y == 1){
        var x = 83;
        block.style.left = x + "px";
        console.log(y);
        y = 2;
    }
    else if (y == 2){
        x = 147;
        block.style.left = x + "px";
        console.log(y);
        y = 3;
    }
    else if (y == 3){
        x = 20;
        block.style.left = x + "px";
        y = 1;
        console.log("0");
    }
}