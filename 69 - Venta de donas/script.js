<<<<<<< HEAD
function crearTiendas(contenedorID, min, crearTiendas){
    //Encontrar contenedor por su ID
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas<=crearTiendas; conteoTiendas ++){
        //Crear el texto del label para poder llamar a la función
        let textoEtiqueta = "Tienda" + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agreagar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta
    let elementoEtiqueta = document.createElement("label")
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for",textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer los atributos del input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0)

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemsTiendas");

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if(valorVenta == ventaMayor){
            item.children[1].className = "menuInputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}


function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}

=======
function crearTiendas(contenedorID, min, crearTiendas){
    //Encontrar contenedor por su ID
    let elementoContenedor = document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas = 1; conteoTiendas<=crearTiendas; conteoTiendas ++){
        //Crear el texto del label para poder llamar a la función
        let textoEtiqueta = "Tienda" + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

        //agreagar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas <p>
    let elementoParrafo = document.createElement("p");

    //crear la etiqueta
    let elementoEtiqueta = document.createElement("label")
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con input
    elementoEtiqueta.setAttribute("for",textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer los atributos del input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0)

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemsTiendas");

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementoVentas.children){
        let valorVenta = extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className = "menuNeutro";

        if(valorVenta == ventaMayor){
            item.children[1].className = "menuInputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "menuInputMenor";
        }
    }

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}


function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
    }

    return total;
}

function calcularMayor(array){
    let maximo = array[0];

    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }

    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];

    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}

>>>>>>> 2deb5bfda9429f8209f9e2d0304100fadc140662
