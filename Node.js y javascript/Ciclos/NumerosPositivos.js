function numerosPositivos(arraypositivos) {
    let soloPares = [];
    for (let i = 0; i < arraypositivos.length; i++) {

        if ((arraypositivos[i] % 2) != 1) {
            soloPares.push(arraypositivos[i])
        }
        
    }
    return soloPares;
}
console.log(numerosPositivos([30, 15, 13, 22, 42, 54]))