//Exercice 6

/**
* affiche une pyramide de n marches
* @param {number} nombre nombre de marches de la piramide
*/
function pyramide(nombre){
    let chaineEtoile = "*";
    for (iteration = 1; iteration <= nombre; iteration++){
        /* je calcule d'abord le nombre d'espace à
        rajouter avant de copier mes étoiles.
        Pour créer les etages de ma pyramide nous observons qu'entre chaque etage
        nous rajoutons 2"*" de plus sachant que l'on commence 
        avec une seule étoile donc avec un n de "0" */
        console.log(" ".repeat(nombre - iteration) + chaineEtoile.repeat(2*(iteration -1) + 1));
    }
    
}

pyramide(5);