var x = 0;
function f1(){
    
    //console.log(x);
    if (x !== 1){
        alert (event.target.textContent);
    }
}

function f2(){
    if (x == 0){
        x = 1;
    }
    else if (x == 1){
        x = 0;
    }
}