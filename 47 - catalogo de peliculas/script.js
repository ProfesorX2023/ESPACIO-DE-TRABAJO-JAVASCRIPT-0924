function agregarPelicula(){
    let edad = document.getElementById("pelicula").value;
    let genero = document.getElementById("genero").value;
    let mensaje = "";

    switch (genero){
        case "comedia":
            if(edad < 13){
                mensaje = "Si te gusta la comedia, te recomendamos 'Back to the Future'";
            }else if(edad < 16){
                mensaje = "Si te gusta la comedia, te recomendamos 'The Thruman Show'";
            }else{
                mensaje = "Si te gusta la comedia, te recomendamos 'The Wolf of Wall Street'";
            }
          
            break;
        case "crimen":
            if(edad < 13){
                mensaje = "No hay peliculas para Crimen'";

            }else if(edad < 16){
                mensaje = "Si te gusta el Crimen, te recomendamos 'El secreto de sus ojos'";

            }else{
                mensaje = "Si te gusta el Crimen, te recomendamos 'Scarface'";

            }
            break;
        case "drama":
            if(edad < 13){
                mensaje = "Si te gusta los dramas, te recomendamos 'Casa Blanca'";
            }else if(edad < 16){
                mensaje = "Si te gusta los dramas, te recomendamos 'The Shawshank Redemption'";
            }else{
                mensaje = "Si te gusta los dramas, te recomendamos 'Requiem for a Dream'";
            }
            break;
        case "musical":
            if(edad < 13){
                mensaje = "Si te gusta los musicales, te recomendamos 'LA LA LAND'";

            }else if(edad < 16){
                mensaje = "Si te gusta los musicales, te recomendamos 'Les Miserables'";

            }else{
                mensaje = "Si te gusta los musicales, te recomendamos 'The Rocky Horror Picture Show'";
            }
            break;
        default:
            mensaje = "Selecciona un género";
    }
    let catalogo = document.getElementById("catalogo");
    let nuevaPelicula = document.createElement("li");
    nuevaPelicula.textContent = `Para tu edad: ${edad} - Genero": ${genero}. ${mensaje}`;
    catalogo.appendChild(nuevaPelicula);

    document.getElementById("pelicula").value = "";
}