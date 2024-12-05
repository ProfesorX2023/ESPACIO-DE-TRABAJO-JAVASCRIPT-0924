document.getElementById("boton").addEventListener("click", function(){
    let eventoPersonalizado = new CustomEvent("saludo", {
        detail: {texto: "!Hola desde un evento personalizado!"}
    });
    document.dispatchEvent(eventoPersonalizado);
});

document.addEventListener("saludo", function(event){
    document.getElementById("mensaje").textContent = event.detail.texto;
})