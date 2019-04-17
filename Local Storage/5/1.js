//var x = localStorage.
var out = document.getElementById("out");
console.log(localStorage.key(2));
//console.log(localStorage.bla);
//
//for (var key in localStorage){
//    console.log(key);
//}
for (var i=0;i<localStorage.length;i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}

//window.onload = function(){
//    for (var i = 0; i<localStorage.length; i++){
//        out.innerHTML += localStorage[key];
//    }
//}
