var m = ["hello", 5, 18, "yes", "no"];


localStorage.setItem("m1", JSON.stringify(m));

var o = JSON.parse(localStorage.getItem("m1"));
console.log(o);
