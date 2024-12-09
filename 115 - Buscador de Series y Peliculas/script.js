const catalogo = [
    {titulo: "Breaking Bad", tipo: "Serie"},
    {titulo: "Game of Thrones", tipo: "Serie"},
    {titulo: "Inception", tipo: "Pelicula"},
    {titulo: "Interstellar", tipo: "Pelicula"},
    {titulo: "Stranger Things", tipo: "Serie"},
    {titulo: "The Dark Knight", tipo: "Pelcula"},
];

document.getElementById("buscador").addEventListener("input", function(){
    let query = this.value.toLocaleLowerCase();
    let resultadosFiltrados = catalogo.filter(item => item.titulo.toLowerCase().includes(query));

    mostrarResultados(resultadosFiltrados);
});

function mostrarResultados(resultados){
    let contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";
    
    resultados.forEach(item =>{
        let div = document.createElement("div")
        div.classList.add("item");
        div.textContent = `${item.titulo} (${item.tipo})`;
        contenedor.appendChild(div);
    });

}