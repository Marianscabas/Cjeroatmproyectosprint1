
function login(from) {
    //admi
    if (from.d.value == "123456" && from.c.value == "123" ) {
         location= "principalCJ.html"
    }

    else if(from.d.value == "" && from.c.value == "") {
        alert("usuario invalido ")
    }
    else {
        alert("usuario o contraseña incorretos")
    }
}

    

















































