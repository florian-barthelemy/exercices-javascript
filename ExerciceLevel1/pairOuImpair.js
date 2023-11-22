/**
 * vérifie si un nombre est pair ou impair
 * @param {number} nombre nombre à vérifier 
 */
function pairOuImpair(nombre){
    if (nombre % 2 ===0) // vérifie que le reste de la division par 2 est 0.
    {
        console.log("Nombre pair");
    }
    else
    {
        console.log("Nombre impair");
    }
}

pairOuImpair(4);