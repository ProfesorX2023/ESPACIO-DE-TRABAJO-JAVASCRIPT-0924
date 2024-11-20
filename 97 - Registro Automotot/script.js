function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let automovil1 = new Automovil("Ford","Focus","Rojo",2015,"Matías Pérez");
let automovil2 = new Automovil("Chevrolet","Camaro","Amarillo",2018,"Silvina Martinez");
let automovil3 = new Automovil("Toyota","Corolla","Amarillo",2021,"Fernando Garcia");
let automovil4 = new Automovil("Mazda","Protege","negro",2002,"Carlos García");
let automovil5 = new Automovil("Dodge","Camaro","Gris",2024,"Marcelo Torres");

let automoviles = [automovil1, automovil2, automovil3, automovil4, automovil5];

function agregarAutomovil(){
    let elementoMarca = document.getElementById("marca").value;
    let elementoModelo = document.getElementById("modelo").value;
    let elementoColor = document.getElementById("color").value;
    let elementoAnio = document.getElementById("anio").value;
    let elementoTitular = document.getElementById("titular").value;
    let automovil = new Automovil(elementoMarca, elementoModelo, elementoColor, elementoAnio, elementoTitular);
     automoviles.push(automovil);
}

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutomoviles(){
    let lista = document.getElementById("listaAutomoviles");

    for(let automovil of automoviles){
        let item = document.createElement("li");
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}