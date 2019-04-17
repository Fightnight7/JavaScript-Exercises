var out = document.getElementById("out");

function f1(){
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var mail = document.getElementById("mail").value;
var password = document.getElementById("password").value;
    
    if (name == ""){
        alert ("Введите имя");
    }
    else {
        name = name.replace(/\s+/g, '');
        out.innerHTML = "Ваше имя: " + name + "<br>";
            if (surname == ""){
            alert ("Введите фамилию:");
            }
            else {
                surname = surname.replace(/\s+/g, '');
                out.innerHTML += "Ваша фамилия: " + surname + "<br>";
                    if (mail.indexOf("@") == -1) {
                    alert ("Введите правильную элетронную почту");
                    }
                    else {
                        mail = mail.replace(/\s+/g, '');
                        out.innerHTML +=  mail + "<br>";
                            if (password.length <5){
                            alert ("Пароль должен быть минимум 5 символов");
                            }
                            else {
                            out.innerHTML += "password true";
                        }
                    }
                }
            }
}
        