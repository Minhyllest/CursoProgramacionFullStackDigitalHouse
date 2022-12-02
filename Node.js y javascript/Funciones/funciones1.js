function alquilerVehiculo(tipoVehiculo,diaAlquiler,sillaBebe){
    let valorTotal;
    switch (tipoVehiculo) {
        case "compacto":
            valorTotal=14000 * diaAlquiler;            
            break;
        case "mediano":
            valorTotal=17000  *diaAlquiler;
            break;
        case "camioneta":
            valorTotal=28000 * diaAlquiler;
            break;
    }
    if (sillaBebe==true){
        valorTotal=valorTotal + (1200 * diaAlquiler);
        console.log("Estimado cliente: en base al tipo de vehículo ",tipoVehiculo," alquilado, considerando los ",diaAlquiler," días utilizados y la silla para bebé, el monto total a pagar es de $",valorTotal);
        }else{console.log("Estimado cliente: en base al tipo de vehículo ",tipoVehiculo," alquilado, considerando los ",diaAlquiler," días utilizados, el monto total a pagar es de $",valorTotal);
            
        }
        
}
alquilerVehiculo("camioneta",17,false);
    