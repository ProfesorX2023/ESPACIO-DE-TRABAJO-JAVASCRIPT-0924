<<<<<<< HEAD
let array = [7,9,2,8,6];

function listarNotas(){
    let lista = document.getElementById("listaNotas");

    for(let nota of array){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){
    let suma = 0;

    for(i = 0; i < 5; i++){
        suma = suma + array[i];
    }

    let promedio = (suma/5);
    document.getElementById("promedio").textContent = promedio;
}

function notaMasAlta(){
    let notaAlta = 0;
    let i = 0;
    while(i < 5){
        if(array[i] > notaAlta){
            notaAlta = array[i]
        }
        i++;
    }
    document.getElementById("nota").textContent = notaAlta;
}

function hayAplazo(){
    let aplazo = "No";
    let i = 0;

    do{
        if(array[i] < 6){
            aplazo = "Si"
            break;
        }
        i++;
    }while(i<5);
    document.getElementById("aplazo").textContent = aplazo
=======
let array = [7,9,2,8,6];

function listarNotas(){
    let lista = document.getElementById("listaNotas");

    for(let nota of array){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){
    let suma = 0;

    for(i = 0; i < 5; i++){
        suma = suma + array[i];
    }

    let promedio = (suma/5);
    document.getElementById("promedio").textContent = promedio;
}

function notaMasAlta(){
    let notaAlta = 0;
    let i = 0;
    while(i < 5){
        if(array[i] > notaAlta){
            notaAlta = array[i]
        }
        i++;
    }
    document.getElementById("nota").textContent = notaAlta;
}

function hayAplazo(){
    let aplazo = "No";
    let i = 0;

    do{
        if(array[i] < 6){
            aplazo = "Si"
            break;
        }
        i++;
    }while(i<5);
    document.getElementById("aplazo").textContent = aplazo
>>>>>>> 2deb5bfda9429f8209f9e2d0304100fadc140662
}