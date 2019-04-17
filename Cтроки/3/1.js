var out = document.querySelector("#out");
document.getElementById("add").onblur = f1;

function f1(){
    var add = document.getElementById("add").value
    
    if (add.match("https://") == "https://") {
        out.innerHTML = add.slice(8);
    }
    else if (add.match("http://") == "http://"){
        out.innerHTML = add.slice(7);
    }
    else {
       out.innerHTML = "Ввод неверный";
    }
}

//function f1(){
//    var add = document.getElementById("add").value
//    
//    if (add.match("https://") == "https://") {
//        return 1;
//    }
//    else if (add.match("http://") == "http://"){
//        return 2;
//    }
//    else {
//       return 3;
//    }
//    out.innerHTML = f1();
//    console.log(f1())
//}


