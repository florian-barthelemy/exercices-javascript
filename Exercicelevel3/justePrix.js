//Exercice 2

/**
 * demande à un utilisateur de rentrer un nombre de tentative et une valeur maximale
 * @returns {number[]} nombre de tentatives et prix maximum
 */
function readlineSync(){ 
    tentative = 0;
    prixMax = 0;
    var readlineSync = require("readline-sync");
    /*repose la question tant que la réponse utilisateur n'est pas un nombre 
    ou un nombre strictement positif*/
    while (isNaN(tentative) || tentative <= 0){
        tentative = readlineSync.question("Veuillez saisir un nombre de tentatives ");
    }
    while (isNaN(prixMax) || prixMax <= 0){
        prixMax = readlineSync.question("Veuillez saisir la valeur maximale à trouver ");
    }
    
    return  [parseInt(tentative), parseInt(prixMax)];
}

/**
 * demande au joueur une réponse comprise entre 0 et le prix maximum
 * @param {number} prix maximum
 * @returns {number} renvoit la réponse de l'utilisateur
 */
function readlineSyncJoueur(prixMax){
    let prixJoueur = -1;
    var readlineSync = require("readline-sync");
    while (isNaN(prixJoueur) || prixJoueur < 0 || prixJoueur > prixMax){
        prixJoueur = readlineSync.question("Devinez le prix (valeur comprise entre 0 et " + prixMax + ") ");
    }
    return parseInt(prixJoueur);
}

/**
 * contient la logique du juste prix
 */
function justePrix(){
    //tableau contenant le nombre de tentatives ainsi que le valeur maximale
    let prixJoueur = -1;
    let tentativeValeurMax = readlineSync();
    let tentative = 0;
    const prixADeviner = getRandomNumber(tentativeValeurMax[1]);
    /* vérifie que le joueur n'a pas trouver le prix et qu'il n'a pas épuisé son nombre de tentative
     * si ce n'est pas le cas il continue de jouer 
    */
    while (tentative < tentativeValeurMax[0]  && prixJoueur != prixADeviner){
        prixJoueur = readlineSyncJoueur(tentativeValeurMax[1]);
        tentative ++;
    }
    // vérifie si il a trouver le prix si c'est le cas affiche un message de victoire sinon défaite
    if (prixJoueur === prixADeviner){
        console.log("Félicitations vous avez gagné!");
    }
    else
    {
      console.log("Vous avez perdu ...");
    }
}

/**
 * génére un nombre aléatoire entre 0 et une valeur
 * @param {number} valeurMax valeur max qui peut etre généré aléatoirement
 * @returns {number} valeur généré aléatoirement
 */
function getRandomNumber(valeurMax){
    // permet de multiplier une valeur comprise entre 0 et 1 par une valeur et de l'arrondir à l'entier le plus proche
    return Math.floor(Math.random() * valeurMax);
}

justePrix();