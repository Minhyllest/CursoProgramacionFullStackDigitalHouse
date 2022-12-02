let valorTotal = (tipoHamburguesa,jamon,queso,salsadeTomate,mayonesa,mostaza,tomate,lechuga,cebolla) => {
    let total =  0;
    switch (tipoHamburguesa) {
        case "carne a la parrilla":
            total += 1800;
            break;
        case "pollo":
            total += 1500;
            break;
        case "vegetariana":
            total += 1200;
            break
        }
        if (jamon==true){total += 30;}
        if (queso==true){total += 25;}
        if (salsadeTomate==true){total += 5;}
        if (mayonesa==true){total += 5;}
        if (mostaza==true){total += 5;}
        if (tomate==true){total += 15;}
        if (lechuga==true){total += 10;}
        if (cebolla==true){total += 10;}
        return total;
}
function  final(nombre, apellido, tipoHamburguesa, jamon, queso, salsadeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback){
    return "Estimado "+ nombre+""+apellido +  "el monto total a pagar es de: $"+callback(tipoHamburguesa,jamon,queso,salsadeTomate,mayonesa,mostaza,tomate,lechuga,cebolla);
}
console.log(final("Bruno ","Cabral ","pollo",false,true,true,false,true,true,true,true,valorTotal));