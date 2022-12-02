let fs = require("fs")
const bicicletasfile = fs.readFileSync(__dirname + '/datos', 'utf-8');
const bicicletas = JSON.parse(bicicletasfile);

module.exports = bicicletas

function importar(...marca){
    
}