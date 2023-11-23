//Exercice 1


/**
 * demande à un utilisateur de rentrer un nombre
 * @returns {number} nombre souhaité
 */
function readlineSync(){ 
    nombre = 0;
    var readlineSync = require("readline-sync");
    /*repose la question tant que la réponse utilisateur n'est pas un nombre 
    ou un nombre strictement positif*/
    while (isNaN(nombre) || nombre <= 0){
        nombre = readlineSync.question("Veuillez saisir un nombre ");
    }
    return  parseInt(nombre);
}

/**
 * affiche les nombres de 0 à un nombre donnée
 * en remplacant les multiples de 3 par FIZZ
 * les multiples de 5 par BUZZ
 * et les multiples de 3 et de 5 par FIZZBUZZ
 */
function fizzBuzz(){
    nombre = readlineSync();
    for (let iteration = 0; iteration <= nombre; iteration++){
        // pour chaque nombre je crée un message vide
        let message = "";
        // si c'est un multiple de 3 j'ajoute au message le mot FIZZ
        if (iteration % 3 === 0){
            message += "FIZZ";
        } 

        // si c'est un multiple de 5 j'ajoute au message le mot BUZZ
        if (iteration % 5 === 0){
            message += "BUZZ";
        }

        // si mon message est toujours vide j'affiche le nombre sinon j'affiche le contenu du message
        if(message === ""){
            console.log(iteration);
        }
        else
        {
            console.log(message);
        }
    }
}

fizzBuzz();