var block = document.getElementById("block");

block.addEventListener("mouseup", f1);
//document.oncontextmenu="event.preventDefault()";

//document.addEventListener("contextmenu", function(event){
//    event.preventDefault()
//});

function f1(e){
    if (typeof e === 'object') {
    switch (e.block) {
      case 0:
        out.textContent = 'Left button clicked.';
        break;
      case 1:
        out.textContent = 'Middle button clicked.';
        break;
      case 2:
        out.textContent = 'Right button clicked.';
        break;
      default:
        out.textContent = 'Unknown button code';
        }
    }
}