const importar = require("./collectibles");

let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles = {
    figures : unifiedCollectibles,

    listFigures: function (){
        this.figures.forEach(figura => {
            console.log("---------")
            console.log("Marca : "+ figura.marca);
            console.log("Nombre: " + figura.nombre);
            console.log("Precio; " + figura.precio);
            console.log("Stock: " + figura.stock)
        });
    },
    figuresByBrand : function (marca){
        let figurasADevolver = this.figures.filter(figura => {
            return figura.marca == marca
        });
        return figurasADevolver
    },
}
console.log(collectibles.figuresByBrand("Star Wars"));
console.log(collectibles.listFigures());