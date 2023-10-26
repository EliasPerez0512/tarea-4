const usuario="Elias"
const contraseña="Pepe40"

function validarUsuarioContraseña(){
var limpiar=""
var exito="Campos ingresados validos :D"
const usuarioEntrada=document.getElementById("usuario");
const constraseñaEntrada=document.getElementById("contraseña");
var u=usuarioEntrada.value;
var c=constraseñaEntrada.value;
if(u==usuario && c==contraseña){
    var texto=document.getElementById("texto");
    texto.innerHTML=exito;
    var x =document.createElement("STYLE");
    var t =document.createTextNode(".textito{color: green;text-decoration: underline;}.entrada{color:black;text-decoration:none;}")
    x.appendChild(t);
    document.head.appendChild(x)

}else{
    var texto=document.getElementById("texto");
    texto.innerHTML=limpiar;
    if(u==limpiar && c==limpiar){
        var y =document.createElement("STYLE");
        var z =document.createTextNode(".entrada{color: black;text-decoration: none;}");
        y.appendChild(z);
        document.head.appendChild(y)
    }
    else if(u!=usuario || c!=contraseña){
        var y =document.createElement("STYLE");
        var z =document.createTextNode(".entrada{color: red;text-decoration: underline;}")
        y.appendChild(z);
        document.head.appendChild(y)
    }
}
}
function verContraseña(){
    constraseñaEntrada=document.getElementById("contraseña");
    const checkbox = document.getElementById("mostrar-contraseña");

    if (checkbox.checked) {
        constraseñaEntrada.type = "text"; 
    } else {
        constraseñaEntrada.type = "password"; 
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("boton");
    const loader = document.getElementById("loader");

    boton.addEventListener("click", function() {
        loader.style.display = "block";

        setTimeout(function() {
            loader.style.display = "none";
        }, 2000);
    });
});
