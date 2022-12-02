let precioCursos = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]]

let cursosAlumno = ["HTML5", "CSS3", "JAVASCRIPT","NODEJS","REACT"]

let totalPagar = 0;

function callback(multidimensional, cursos) {
    
    if (cursos.includes(precioCursos[0][0].toUpperCase())) {
        totalPagar += multidimensional[0][1];
    }
    if (cursos.includes(precioCursos[1][0].toUpperCase())) {
        totalPagar += multidimensional[1][1];
    }
    if (cursos.includes(precioCursos[2][0].toUpperCase())) {
        totalPagar += multidimensional[2][1]
    }
    if (cursos.includes(precioCursos[3][0].toUpperCase())) {
        totalPagar += multidimensional[3][1]
    }
    if (cursos.includes(precioCursos[4][0].toUpperCase())) {
        totalPagar += multidimensional[4][1]
    }
}
function pantalla(nombre,apellido,multidimensional,cursos){
    console.log("Estimado " + nombre +" "+  apellido+ ", en función de los cursos seleccionados: ") 
    for (let i = 0; i < cursosAlumno.length; i++) {
        console.log((i+1)+".- " + cursos[i])
    }
    callback(multidimensional,cursos)
    console.log("El monto total a pagar es de: " + "$"+totalPagar)
    console.log("Bienvenido a la gran aventura Digital House")
}
pantalla("Bruno","Cabral",precioCursos,cursosAlumno)

