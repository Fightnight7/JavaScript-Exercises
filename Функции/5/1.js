
document.getElementById("test").onclick = f1;

function f1(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    //console.log (Math.pow (2, 2))
//    if (y == 0){
//       alert ("Нельзя вводить 0 в степень!");
//        
//    }
//    else {
//        alert (Math.pow (x, y));
//        document.getElementById("num1").value = "0";
//        document.getElementById("num2").value = "0";
    
        if (y != 0){
            alert (Math.pow (x, y));
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
      
        
    }
    else if (y==0) { alert ("Нельзя вводить 0 в степень!");
        
    }
}
