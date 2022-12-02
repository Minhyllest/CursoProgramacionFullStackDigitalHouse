const bicicletas = require('./datosBici');
let dhBici = {
    bicicletasImportadas: bicicletas,
    buscarBici: function (identificador) {
        let retornarBici = this.bicicletasImportadas.filter((bicicleta) =>
            bicicleta.id === identificador);
        if (retornarBici != null) {
            return (retornarBici)
        }
        return null
    },
    venderBici: function (identificador) {
        let biciVender = this.buscarBici(identificador)
        if (identificador != 0) {

        }

        return biciVender;
    },
}

console.log(dhBici.venderBici(3));

