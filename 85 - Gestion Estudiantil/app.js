// Clase Estudiante con atributos y métodos
class Estudiante{
    constructor(nombre, edad, curso){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso
    }

    //Método para mostrar información del estudiante
    mostrarInfo(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
    }

    //Metodo para actualizar el curso del estudiante
    actualizarCurso(nuevoCurso){
        this.curso = nuevoCurso
    }

}
//Array para almacenar a los estudiantes

let estudiantes = [];

//Funcion para agregar un nuevo estudiante
function agregarEstudiante(){
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const curso = document.getElementById("curso").value;

    if(nombre && edad && curso){
        const estudiante = new Estudiante(nombre, edad, curso);
        estudiantes.push(estudiante);
        mostrarEstudiantes();

        //Limpiar campos de entrada
        document.getElementById("nombre").value = '';
        document.getElementById("edad").value = '';
        document.getElementById("curso").value = '';
    } else{
        alert("Por favor, completa todos los campos");
    }
}


//Función para mostrar la lista de estudiantes en el DOM
function mostrarEstudiantes(){
    const listaEstudiantesDiv = document.getElementById("listaEstudiantes");
    listaEstudiantesDiv.innerHTML = '';

    estudiantes.forEach((estudiante, index)=>{
        const estudianteDiv = document.createElement("div");
        estudianteDiv.className = "estudiante";
        estudianteDiv.innerHTML = `
            <p>${estudiante.mostrarInfo()}</p>
            <button onclick="actualizarCursoEstudiante(${index})">Actualizar Curso</button>
        `;
        listaEstudiantesDiv.appendChild(estudianteDiv);
    });
}


//Funcion para actualizar el curso de un estudiante especifico
function actualizarCursoEstudiante(index){
     const nuevoCurso = prompt("Ingrese el nuevo curso para el estudiante");
     if(nuevoCurso){
         estudiantes[index].actualizarCurso(nuevoCurso);
         mostrarEstudiantes();
     }
}