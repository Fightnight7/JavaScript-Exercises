function fmain(){
    var out = document.getElementById("out");
    f1()
    out.innerHTML = f1();
}

function f1(){
    var num = document.getElementById("num").value;
    if (num>10){
        return Math.sqrt(num);
    }
    else if (num<7){
        return ("Your number is less then 7");
    }
    else if (num == 8 || num == 9){
        return (num);
    }
    else {
        return (+num+ +2);
    }
}


