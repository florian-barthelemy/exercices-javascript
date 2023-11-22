//Exercice 4

/**
 * affiche un escalier de n marches
 * @param {number} nombre nombre de marches de l'escalier
 */
function escalier(nombre){
    let chaineEtoile = "*";
    for (iteration = 1; iteration <= nombre; iteration++){
        console.log(chaineEtoile.repeat(iteration));
    }
}

escalier(5);