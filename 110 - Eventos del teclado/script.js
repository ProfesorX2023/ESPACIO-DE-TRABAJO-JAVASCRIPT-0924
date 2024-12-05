document.getElementById("entrada").addEventListener("keydown", function(event){
    document.getElementById("salida").textContent = "Has presionado la tecla " + event.key;
});