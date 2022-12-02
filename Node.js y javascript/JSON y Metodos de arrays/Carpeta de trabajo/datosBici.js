let fs = require("fs")
const bicicletasfile = fs.readFileSync(__dirname + '/Bicicletas.json', 'utf-8');
const bicicletas = JSON.parse(bicicletasfile);

module.exports = bicicletas
