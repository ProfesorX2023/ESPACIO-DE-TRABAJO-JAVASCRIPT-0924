//simulacion de una API de cotizaciones
function obtenerCotizacion(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(valor > 0){
                let cotizacion = valor * 1.2;
                resolve(`El valor cotizado es: Q${cotizacion.toFixed(2)}`);
            }else{
                reject("El valor debe ser mayor a 0.")
            }
        }, 2000);
    });
}

async function realizarCotizacion() {
    let valor = document.getElementById("valor").value;
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Procesando cotización..."
    
    try{
        let resultado = await obtenerCotizacion(valor);
        resultadoDiv.textContent = resultado;
    } catch(error){
        resultadoDiv.textContent = `Error: ${error}`
    }
}