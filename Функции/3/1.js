var par = document.getElementsByTagName("p");
console.log(par);
//var out1 = document.getElementById("out1");
//var out2 = document.getElementById("out2");
//var out3 = document.getElementById("out3");
//var out4 = document.getElementById("out4");
//var out5 = document.getElementById("out5");
f1();
function f1(){
    for (var i=0; i<=par.length; i++){
        
        par[i].innerHTML = (i+1) + "." + par[i].textContent + "<br>";
//        out2.innerHTML += (i+1) + "." + "<br>" + par[i].textContent;
//        out3.innerHTML += (i+1) + "." + "<br>" + par[i].textContent;
//        out4.innerHTML += (i+1) + "." + "<br>" + par[i].textContent;
//        out5.innerHTML += (i+1) + "." + "<br>" + par[i].textContent;
        
    }
}