var out = document.getElementById("out");
var m = [];
m[0] = '<img src="images/iconfinder_calendar_285670.png" alt="">';
m[1] = '<img src="images/iconfinder_cat_285654.png" alt="">';
m[2] = '<img src="images/iconfinder_house_299061.png" alt="">';
m[3] = '<img src="images/iconfinder_map_285662.png" alt="">';
m[4] = '<img src="images/iconfinder_star_285661.png" alt="">';

for (var i=0; i<m.length; i++){
    out.innerHTML += m[i];
}

//out.innerHTML = Image() src="images/iconfinder_calendar_285670.png" alt="">;
//Image.src = "images/iconfinder_calendar_285670.png"

//var myImage = new Image(100, 200);
//myImage.src = "iconfinder_calendar_285670.png";
//document.body.appendChild(myImage);

