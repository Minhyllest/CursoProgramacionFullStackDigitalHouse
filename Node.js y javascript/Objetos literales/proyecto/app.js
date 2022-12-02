const peliculas = require('./peliculas');
let modulo = require('./peliculas');
let fs = require("fs")

for (let i = 0; i < peliculas.length; i++) {
    let peliculasArray = peliculas[i];
    console.log(peliculasArray)
}
let texto = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8");
console.log(texto)