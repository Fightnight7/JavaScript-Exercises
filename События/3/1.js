
var out = document.getElementById("out");
    
for (var i =0; i<350; i++){
  
    var div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.background = "orange";
    div.style.transition = "all 1s";
    div.style.position = "relative";
    div.style.float = "left";
    div.style.margin = "5px";
    div.addEventListener("mouseenter", radius);
    div.classList.add ("dov");
    div.setAttribute( "id", "dav");
    out.appendChild(div);
}

function radius(){
    //console.log(event.target.attributes.style.textContent);
   //event.target.attributes.style.textContent += background: red;
    this.style.borderRadius = "30px";
}
//var dav = document.getElementById("dav");
//var dov = document.getElementsByClassName("dov");
//console.log(dov);
//console.log(div);
//

