class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this._edad = edad;
    }

    get edad(){
        return this._edad;
    }

    set edad(valor){
        if(valor > 0){
            this._edad = valor;
        }else {
            alert("La edad edad debe ser un  número positivo");
        }
    }

    detalles(){
        return `Nombre ${this.nombre}, Edad: ${this.edad}`;
    }
}

const persona = new Persona("Maria",25);

function mostrarInfo(){
    document.getElementById("infoPersona").textContent = persona.detalles();
}

function actualizarEdad(){
    const nuevaEdad = parseInt(prompt("Ingresa la nueva edad:"));
    if(!isNaN(nuevaEdad)){
        persona.edad = nuevaEdad;
        mostrarInfo();
    }
}