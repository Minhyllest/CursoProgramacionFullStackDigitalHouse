let graduadosHtml5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCss3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavascript = "70 65 58 45 23 57 34 17 72";
let graduadosNodejs = "45 56 72 34 65 72 70 32";

let array1 = (graduadosHtml5.split(" "))
let array2 = (graduadosCss3.split(" "))
let array3 = (graduadosJavascript.split(" "))
let array4 = (graduadosNodejs.split(" "))

let promedio = 0;

function arrays(primero, segundo, tercero, cuarto, numero) {

    switch (numero) {
        case 1: {
            for (let i = 0; i < primero.length; i++) {
                promedio = (promedio + parseInt(primero[i]) / (array1.length));
            }
            console.log(promedio)
            break
        }

        case 2: {
            for (let i = 0; i < segundo.length; i++) {
                promedio = (promedio + parseInt(segundo[i]) / (array2.length));
            }
            console.log(promedio)
            break
        }

        case 3: {
            for (let i = 0; i < tercero.length; i++) {
                promedio = (promedio + parseInt(tercero[i]) / (array3.length));
            }
            console.log(promedio)
            break
        }
        case 4: {
            for (let i = 0; i < cuarto.length; i++) {
                promedio = (promedio + parseInt(cuarto[i]) / (array4.length));
            }
            console.log(promedio)
            break
        }
    }
}
arrays(array1, array2, array3, array4, 4)