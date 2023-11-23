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

    /*comparait à l'exercice précédent on observe une symétrie
    il suffit donc de reprendre la boucle précédente à l'envers
    en ne prenant pas compte de la dernière ligne
    */
    for (iteration = nombre - 1; iteration > 0; iteration--){
        console.log(chaineEtoile.repeat(iteration));
    }
}

pyramideEtrange(5);