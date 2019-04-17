var sunset = document.getElementById("sunset");
var x = 50;
var y = 1;
window.onload = function(){
    sunset.addEventListener("contextmenu", function(event){
        event.preventDefault()
});
                            }
                            
function f1 (){
    sunset.style.width = (10 + x) + "%";
    x = x + 10;
    if (x > 100){
        sunset.style.width = "50%";
        x = 50;
    }
}

function f2 (){
    sunset.style.opacity = y - 0.1;
    y = y - 0.1;
    if (y <= 0.01){
        sunset.style.opacity = 1;
        y = 1;
    }
}
var z = 50;
function f3(){
    sunset.style.width = (0.1 + z) + "%";
    z = z + 0.1;
}