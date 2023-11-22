//Exercice 3

/**
 * affiche la somme de 1 à un nombre rentré par l'utilisateur
 * @param {number} nombre nombre rentré par l'utilisateur
 */
function afficherNombreDe1An(nombre){
    let iterations = [];
    let somme = 0;
    for (iteration = 1; iteration < nombre+1; iteration++){
        iterations.push(iteration);
        somme += iteration;
    }
    
    console.log(iterations.join("+") + " = " + somme);
    
}

/**
* demande un nombre à un utilisateur
*/
function demanderNombre(){
    let nombre;
    //On créé une interface de communication avec le terminal de l'utilisateur
    const readline = require('readline').createInterface({ 
        input: process.stdin,
        output: process.stdout,
    });
    
    readline.setPrompt("Jusqu'a combien voulez vous calculer ? ");
    //...Et on lui pose la question définie.
    readline.prompt();
    //Quand on reçoit la réponse de l'utilisateur, on lance la function(input).
    readline.on("line", function(nombreInput) {
        //On transforme la réponse de l'utilisateur en nombre...
        input = Number(nombreInput);
        //Et on vérifie si la réponse de l'utilisateur correspond à nos demandes.
        if(isNaN(input) || input <= 0){
            //Ici, si on rentre dans cette condition, c'est que les conditions ne sont pas remplies,
            //donc on redemande à l'utilisateur.
            readline.prompt()
        }
        else{
            //Sinon, l'entrée de l'utilisateur est valide, on l'assigne donc a la variable age.
            nombre = input;
            
            //Enfin, on n'a plus besoin de poser de questions à l'utilisateur : on va donc fermer l'objet.
            readline.close()
        }
        //Quand on ferme l'objet, la function() se lance
    }).on("close", function() {
        //Et on met ici la logique de notre programme sous la forme d'une fonction principale.
        afficherNombreDe1An(nombre);
    })
}

demanderNombre();