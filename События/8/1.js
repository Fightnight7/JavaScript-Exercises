var block = document.getElementById("block");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");

function main(){
    if (radio1.checked == true){
        block.classList.remove("radio2", "radio3");
        block.classList.add("radio1");   
    }
    else if(radio2.checked == true){
        block.classList.remove("radio1", "radio3");
        block.classList.add("radio2");   
    }
    else if (radio3.checked == true){
        block.classList.remove("radio1", "radio2");
        block.classList.add("radio3"); 
    }
}


    
//    function f1(){
//    block.classList.remove("radio2", "radio3");
//    block.classList.add("radio1");
//    console.log(radio1.checked);
//}
//
//function f2(){
//    block.classList.remove("radio1", "radio3");
//    block.classList.add("radio2");
//}
//
//function f3(){
//    block.classList.remove("radio1", "radio2");
//    block.classList.add("radio3");
//}
