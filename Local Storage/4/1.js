setTimeout (f1, 4000);

function f1(){
    var ls = localStorage.getItem("confirm");
    console.log(ls);
    if (ls == null){
        var x = confirm("Согласны ли вы?");
        if (x == true){
            localStorage.setItem("confirm", x);
        }
        else {
            localStorage.removeItem("confirm");
        }     
    }
}