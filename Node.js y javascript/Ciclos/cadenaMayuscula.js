function mostrarcadena(frase){ 
    let element = 1;
    for (let i = 0; i < frase.length; i++) {
        console.log(frase.slice(i,element))
        
        element++;
        
    }
  
    
}
console.log(mostrarcadena("practicando el uso de los ciclos o bucles"));