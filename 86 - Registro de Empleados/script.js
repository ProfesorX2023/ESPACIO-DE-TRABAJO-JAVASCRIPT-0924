let empleados = []

function Empleado(identificador, nombre, nacimiento, cargo){
    this.identificador = identificador;
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    let identificador = document.getElementById("txtIdentificador").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(identificador, nombre, apellido, nacimiento,cargo);
    empleados.push(empleado)

    alert("Empleado ha sido agregado");
    limpiarCampos();
}

function mostrarEmpleado(){
     let listado = '';
     for(empleado of empleados){
        for(let prop in empleado){
            listado = listado + prop.toUpperCase() + ": " + empleado[prop] + " ,";
        }

        listado = listado + "\n";
     }

     alert(listado);
 }

 function limpiarCampos(){
    document.getElementById("txtIdentificador").value ="";
    document.getElementById("txtNombre").value ="";
    document.getElementById("txtApellido").value ="";
    ocument.getElementById("txtNacimiento").value ="";
    document.getElementById("txtCargo").value ="";
 }