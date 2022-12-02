let electrodomesticos = ["cocina", "lavarropa","heladera", "freezer", "microondas", "tostadora"];
function obtenerNumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }
// console.log(electrodomesticos[obtenerNumeroRandom(electrodomesticos.length)])
electrodomesticos.push(electrodomesticos.shift()); 
//console.log(electrodomesticos)
electrodomesticos.push("freidora", "licuadora");
//console.log(electrodomesticos)
//console.log(electrodomesticos.length)
if (electrodomesticos.includes("lavarrop")){
    //console.log("Producto encontrado")
} else {
    //console.log("El producto buscado no existe")
}
let textoArray = electrodomesticos.join(" ")
//console.log(textoArray)
//console.log(text(Array.length)
//console.log(textoArray.replace("lavarropa","hornalla"))
console.log(textoArray.split(' '))
//console.log(electrodomesticosNuevos)