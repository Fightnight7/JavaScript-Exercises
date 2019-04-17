var x = 0;
block.ondblclick = function(){
    var block = document.getElementById("block");
    if (x == 0){
        block.style.backgroundImage = "url('Sunset_2007-1.jpg')";
        block.style.backgroundSize = "700px 500px";
        x = 1;
    }
    else if (x == 1){
        block.style.backgroundImage = "url('changi-boardwalk-sunrise-.jpg')";
        block.style.backgroundSize = "700px 500px";
        x = 0;
    }
}