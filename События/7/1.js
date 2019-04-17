var x = 0;
function f1(){
    var table = document.getElementById("table");
    if (x == 0){
    table.classList.add("bordered");
    var y = document.getElementsByClassName("bordered")[1];
    console.log(y)
    x = 1;
    }
    else if (x == 1){
    table.classList.remove("bordered");
    table.classList.add("striped");
    x = 2;
    }
    else if (x == 2){
    table.classList.remove("striped");
    table.classList.add("highlight");
    x = 2;
    }
}