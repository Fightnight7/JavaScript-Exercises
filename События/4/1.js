var p1 = document.getElementsByClassName("p1");
var block = document.getElementById("block");

for (var i=0; i<p1.length; i++){
    p1[i].addEventListener("click", f1);
    }


function f1(){
//    var x = (event.target.outerHTML).slice(21, -9);
    var x = event.target.src;
    console.log(x);
    
//    block.style.backgroundImage = "url('2015-dodge-challenger-srt-hellcat-with-392-model-wider-view.jpg')";
    block.style.backgroundImage = `url(${x})`;
    block.style.backgroundSize = "contain";
}
