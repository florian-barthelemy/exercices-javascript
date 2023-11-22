/**
 * affiche la table de multiplication de 1 à 10 d'un nombre 
 * @param {number} nombre nombre de la table de multiplication à remplir 
 */
function tableMultiplication(nombre){
    for (iteration = 1; iteration <= 10; iteration++)
    {
        console.log(nombre + " X " + iteration+" = " + (nombre*iteration));
    }
}

tableMultiplication(5);