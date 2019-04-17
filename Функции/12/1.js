var x = 1;
var uuu = 0;
function f1(){
    var burger = document.getElementById("burger").value;
    var sum = [0, 0, 0, 0, 0];
    var sumCal = [0, 0, 0, 0, 0];
//    var sides = document.getElementById("sides");
    var cheese = document.getElementById("cheese").checked;
    var salad = document.getElementById("salad").checked;
    var ham = document.getElementById("ham").checked;
    var mustard = document.getElementById("mustard").checked;
    var mayo = document.getElementById("mayo").checked;
    
    var out1 = document.getElementById("out1");
    var out2 = document.getElementById("out2");
    var result = 0;
    var result2 = 0;
    
    
    if (cheese == true){
        sum[0] = menu["cheese"];
        sumCal[0] = ccal["cheese"];
    }
    
    if (salad == true){
        sum[1] = menu["salad"];
        sumCal[1] = ccal["salad"];
    }
    
    if (ham == true){
        sum[2] = menu["ham"];
        sumCal[2] = ccal["ham"];
    }
    
    if (mustard == true){
        sum[3] = menu["mustard"];
        sumCal[3] = ccal["mustard"];
    }
    
    if (mayo == true){
        sum[4] = menu["mayo"];
        sumCal[4] = ccal["mayo"];
    }
    
    if (salad == false && ham == false && cheese == false){
        alert ("Вы должны выбрать минимум одну начинку!")
    }
    else {
        for (var i = 0; i < sum.length; i++){
            result = result + sum[i];
            var total = ((menu[burger]) + (result));
            out1.innerHTML = "С Вас " + total +  " грн.";
            
       
        }
        for (var i = 0; i < sumCal.length; i++){
            result2 = result2 + sumCal[i];
            out2.innerHTML = "Это будет " + ((ccal[burger]) + (result2)) + " калорий";
    }
    }
        localStorage.setItem("price" + x, total);
        localStorage.setItem("xxx", (x));
        //console.log(x);
        x++;
        for (var i=1; i<c; i++) {
            var z = localStorage.getItem("price" + i);
            uuu = ((+uuu) + (+z));
            
        }
    var c = console.log(localStorage.getItem("xxx"));
    console.log(uuu);
    
            
    
        
    }
   
    
//    console.log(sumCal);
//    console.log(sum);
//    console.log(total);
    


            



var menu = {
    "big" : 25,
    "small" : 17,
    "cheese" : 4,
    "salad" : 5,
    "ham" : 10,
    "mustard" : 5,
    "mayo" : 4
};

var ccal = {
    "big" : 340,
    "small" : 250,
    "cheese" : 25,
    "salad" : 5,
    "ham" : 50,
    "mustard" : 0,
    "mayo" : 10
};

