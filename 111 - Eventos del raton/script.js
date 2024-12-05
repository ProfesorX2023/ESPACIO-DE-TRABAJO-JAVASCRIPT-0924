document.getElementById("area").addEventListener("mouseover", function(event){
    document.getElementById("posicion").textContent = "Posición del ratón: en X = " + event.clientX + ", Y = " + event.clientY;
})