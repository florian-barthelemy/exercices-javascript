//Exercice 5

/**
 * affiche une pyramide étrange de n marches
 * @param {number} nombre nombre de marches de la piramide
 */
function pyramideEtrange(nombre){
    let chaineEtoile = "*";
    for (iteration = 1; iteration <= nombre; iteration++){
        console.log(chaineEtoile.repeat(iteration));
    }

    for (iteration = nombre - 1; iteration > 0; iteration--){
        console.log(chaineEtoile.repeat(iteration));
    }
}

pyramideEtrange(5);