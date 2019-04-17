function f1 (){
    var str = document.getElementById("char").value;
    var char = str.charCodeAt();
    console.log(str.charCodeAt());
    out.innerHTML += str + " has " + char + " keyCode " + "<br>";
    document.getElementById("char").value = "";
}


//document.onkeydown = function(event){
//   console.log(event);
//    out.innerHTML += event.key + " has " + event.keyCode + " keyCode" + "<br>";
//}

