// primer ejercicio

let peliculas = ['Turno de dia','30 noches con mi ex','Bestia','El monte','Top gun maverick','elvis','Thor:amor y trueno']

//segundo ejercicio

function peliculasaelegir(peliculaFav){
    peliculas.pop()
    peliculas.unshift(peliculaFav.toUpperCase());
    return (console.log(peliculas))
}
(peliculasaelegir("Thor:amor y trueno"));

// Tercer ejercicio

let peliculasAEstrenar = ['Counter-Strike','NOP','Vértigo','Nick','Avatar']
peliculasAEstrenar.shift();
console.log(peliculasAEstrenar)

function concatenar(array1,array2){
    let concatenacion = array1.concat(array2);
    return concatenacion
}
console.log(concatenar(peliculas,peliculasAEstrenar));