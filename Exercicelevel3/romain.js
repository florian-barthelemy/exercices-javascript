//Exercice 4

/**
 * permet de convertir un nombre base 10 en 1 nombre romain
 */
function conversionRomain(){
const lettresRomaines = ["M","D","C","L","X","V","I"];
const valeurRomaines = [1000, 500, 100, 50, 10, 5, 1];
let tabResultat = [];
let nombre = readlineSyncNombre();
let index = 0;
    while (nombre != 0){
        /* si le nombre est supérieur à la valeur contenue dans le tableau valeurRomaines à l'index actuel
        *  alors on soustrait à notre nombre cette valeur et afficher cette valeur dans le tabbleau d'affichage 
        *  sinon on va gerer les autres cas
        */
        if (nombre >= valeurRomaines[index] ){
            nombre -= valeurRomaines[index];
            tabResultat.push(lettresRomaines[index]);
        }
        else
        {
            /**
             * si le nombre est inférieur mais qu'il est plus grand ou égale 0.9* la valeur de l'index
             * alors il va d'avoir ajouter 0.1 * la valeur de l'index et ajouter donc la lettre de l'index + 2 dans l'affichage
             * puis retirer la valeur de l'index actuel et ajouter la lettre correspondante dans l'affichage
             * puis on va incrémenter de 2 notre index pour qu'il passe a la puissance de 10 inférieur
             * (cela gère les cas 9*10^n)
             */
            if (nombre >= 0.9 * valeurRomaines[index]){
                nombre += valeurRomaines[index + 2];
                tabResultat.push(lettresRomaines[index + 2]);
                nombre -= valeurRomaines[index];
                tabResultat.push(lettresRomaines[index]);
                index += 2;
            }
            /**
             * si le nombre est inférieur mais qu'il est plus grand ou égale 0.4 * la valeur de l'index
             * tout en étant inférieur à 0.5 * la valeur de l'index
             * alors il va d'avoir ajouter 0.1 * la valeur de l'index et l'ajouter donc la lettre de l'index + 2 dans l'affichage
             * puis retirer la valeur de l'index actuel + 1(5*10^n) et ajouter la lettre correspondante dans l'affichage
             * puis on va incrémenter de 2 notre index pour qu'il passe a la puissance de 10 inférieur
             * (cela gère les cas 4*10 ^ n)
             */
            else if (nombre >= 0.4 * valeurRomaines[index] && nombre < 0.5 * valeurRomaines[index] ){
                nombre += valeurRomaines[index + 2];
                tabResultat.push(lettresRomaines[index + 2]);
                nombre -= valeurRomaines[index + 1];
                tabResultat.push(lettresRomaines[index + 1]);
                index += 2; 
            }

            /**
             * sinon on passe à la prochaine valeur de notre tableau
             * ex si on est dans le cas 100-200-300-500-600-700-800 et que notre index a une valeur de 1000, on passe a la valeur 500
             */
            else
            {
                index++;
            }
        }
    }
    console.log(tabResultat.join(""));
}

/**
* demande à un utilisateur de rentrer un nombre à transformer nombre Romain
* @returns {number} nombre à tranformer en nombre romain
*/
function readlineSyncNombre(){ 
    let nombre = 0;
    var readlineSync = require("readline-sync");
    /*repose la question tant que la réponse utilisateur n'est pas un nombre 
    ou un nombre positif*/
    while (isNaN(nombre) || nombre <= 0){
        nombre = readlineSync.question("Veuillez saisir le nombre à transformer en nombre romain ");
    }
    return  parseInt(nombre);
}

conversionRomain();