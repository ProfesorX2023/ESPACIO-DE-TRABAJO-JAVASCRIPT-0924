class Mascota{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get edad(){
        return this._edad;
    }

    set edad(valor){
        if(valor > 0){
            this._edad = valor
        } else{
            alert("La edad debe de ser positiva");
        }
    }

    mostrarInfo(){
        return `Mascota: ${this.nombre}, Edad: ${this.edad} años`;
    }
}

class Perro extends Mascota{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    hacerSonido(){
        return `${this.nombre} dice: Guau!!`;
    }
}

class Gato extends Mascota{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    hacerSonido(){
        return `${this.nombre} dice: Miau!!`;
    }
}

let mascotas = [];

function registrarMascota(){
    let nombre = document.getElementById("nombre").value;
    let tipo = document.getElementById("tipo").value;
    let edad = document.getElementById("edad").value;

    let mascota;
    if(tipo ==="perro"){
        mascota = new Perro(nombre,edad);
    }else if(tipo === "gato"){
        mascota = new Gato(nombre,edad);
    }else{
        alert("solo se permiten perros y gatos");
    }

    mascotas.push(mascota);
    mostrarMascotas();

}

function mostrarMascotas(){
    let lista = document.getElementById("listaMascotas");
    lista.innerHTML = "";


    for(let mascota of mascotas){
        let item = document.createElement("li");
        item.textContent = mascota.mostrarInfo();
        lista.appendChild(item);
    }
}