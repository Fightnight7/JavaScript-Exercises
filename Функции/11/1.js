var tries = document.getElementById("tries");
var num = Math.floor(Math.random() * 10);
console.log(num);
var t = 3;
tries.innerHTML += " " + t;
                           
function f1(){
    var out = document.getElementById("out");
    guess();
    t--;
    tries.innerHTML = "Попытки: " + t;
    if (t == 0) {
        alert ("Вы проиграли! Страница будет перезагружена");
        location.reload(true);
    }
    out.innerHTML = guess();
}

function guess (){
    var gnum = document.getElementById("gnum").value;
    if (gnum == num){
        t = 4;
        return ("Вы выиграли!!!");
    }
    else if(gnum < num && gnum >= 0){
        return ("Недолет!");
    }
    else if(gnum > num && gnum <= 10) {
        return ("Перелет!");
    }
    else {
        return ("Угадывать нужно с 0 по 10.")
    }
}

