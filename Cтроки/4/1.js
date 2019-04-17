//var str = "Widget with id";
//
//alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
//alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
//alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр

var out = document.getElementById("out");
function f1(){
    var str = document.getElementById("url").value;
    if (str.indexOf("www.") == 0){
        out.innerHTML = str.slice(4); 
    }
    else if (str.indexOf("http://") == 0){
         //console.log((str.indexOf("www."));
        if (str.indexOf("www.") == 7){
            out.innerHTML = str.slice(11);
        }
        else {
            out.innerHTML = str.slice(7);
        }
    }
    else if (str.indexOf("https://") == 0){
        if (str.indexOf("www.") == 8){
            out.innerHTML = str.slice(12);
        }
        else {
            out.innerHTML = str.slice(8);
        }
    }
    else {
        out.innerHTML = str;
    }
    console.log(str);
}