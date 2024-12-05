document.getElementById("texto").addEventListener("input", function(){
    document.getElementById("resultado").textContent = "Texto en vivo: " + this.value;
});