function validarInput() {
    document.getElementById("boton").disabled = !document.getElementById("nombre").value.length || !document.getElementById("email").value.length || !document.getElementById("tel").value.length;
  }

function validarCorreo() {
    let p3 = document.getElementById("email").value;

    if (p3 == '') {
        document.getElementById('email').style.border = "1px solid red";
    } else {
        document.getElementById('email').style.border = "1px solid green";
    }

    if (!/\S+@\S+/.test(p3)) {
        document.getElementById('email').style.border = "1px solid red";
    } else {
        document.getElementById('email').style.border = "1px solid green";
    }
}



function verificar_telefono() {
    let textotelefono = document.getElementById("tel").value;
    let numerocaracterestextotelefono = textotelefono.replace(" ", "");
    numerocaracterestextotelefono = numerocaracterestextotelefono.length;
          
    if (numerocaracterestextotelefono < 9) {
        document.getElementById('tel').style.border = "1px solid red";
        
    } else{
        document.getElementById('tel').style.border = "1px solid green"; 
    }
}

function ValidaLong() {

    let p4 = document.getElementById("nombre").value;
   


    if ((p4.length < 8) || (p4 == '')) {
        document.getElementById('nombre').style.border = "1px solid red";
        document.getElementById('tel').style.border = "1px solid red";
    } else {
        document.getElementById('nombre').style.border = "1px solid green";
        document.getElementById('tel').style.border = "1px solid green";
    }

}