function multiplicar(){
    //obtener numero
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);


    //obtener lista ul
    let elementoTablaMultiplicar = document.getElementById("listaTabla");


    //vaciar tabla antes de ejecutar
    elementoTablaMultiplicar.innerText = "";

    //producir resultados y mostrarlos
    for(x=1;x<=10;x++){
        //calcular los resultados
        let numeroResultado = numeroTabla*x;

        //armar el String con los resultados
        let textoResultado = numeroTabla + " por " +  x  + " es igual a " + numeroResultado;


        //crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}