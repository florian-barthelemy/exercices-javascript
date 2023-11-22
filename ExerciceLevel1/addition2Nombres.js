//Exercice 3
/**
* addition de 2 nombres
* @param {number} nombre1 1er nombre à additionner
* @param {number} nombre2 2 ième nombre à additionner 
* @throws {error} si les 2 nombres ne sont pas de type number
*/

function addition(nombre1, nombre2){
    if (typeof nombre1 != 'number' || typeof nombre2 != 'number') { //vérifie si les données rentrées par l'utilisateur sont des nombres
        throw new Error("Ceci n'est pas une addition de 2 nombres");
    }
    else {
        console.log(nombre1+nombre2);
    }
}

addition(1,2);