var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var block = document.getElementById("block");
function main(){
    if (radio1.checked == true){
        block.classList.add("radio1");
    }
    else {
        block.classList.remove("radio1");
    }
    if (radio2.checked == true){
        block.classList.add("radio2");
    }
    else {
        block.classList.remove("radio2");
    }
    if (radio3.checked == true){
        block.classList.add("radio3");
    }
    else {
        block.classList.remove("radio3");
    }
}