/**
 * trouve la catégorie associé à un âge
 * @returns la catégorie associée à l'âge de l'enfant
 */
function clubEnfant(age){
   
    if (age <= 12)
    {
       console.log("Cadet");
    }
    else if (age <= 10)
    {
       console.log("Minime");
    }
    else if (age <= 8 )
    {
        console.log("Pupille");
    }
    else
    {
        console.log("Poussin");
    }
    
}

/**
 * demande à l'utilisateur de rentrer un âge
 * @returns l'âge saisit par l'utilisateur
 */
function demanderAge(){
    //On définit la variable qui contiendra la réponse légale de l'utilisateur
    let age;

    //On créé une interface de communication avec le terminal de l'utilisateur
    const readline = require('readline').createInterface({ 
        input: process.stdin,
        output: process.stdout,
        });

    //On définit une question à poser à l'utilisateur...
    readline.setPrompt("Quel est l'âge de l'enfant ?");
    //...Et on lui pose la question définie.
    readline.prompt();
    //Quand on reçoit la réponse de l'utilisateur, on lance la function(input).
    readline.on("line", function(ageInput) {
        //On transforme la réponse de l'utilisateur en nombre...
        input = Number(ageInput);
        //Et on vérifie si la réponse de l'utilisateur correspond à nos demandes.
        if(isNaN(input) || input <= 0){
        //Ici, si on rentre dans cette condition, c'est que les conditions ne sont pas remplies,
        //donc on redemande à l'utilisateur.
            readline.prompt()
        }
        else{
            //Sinon, l'entrée de l'utilisateur est valide, on l'assigne donc a la variable age.
            age = input;

            //Enfin, on n'a plus besoin de poser de questions à l'utilisateur : on va donc fermer l'objet.
            readline.close()
        }
        //Quand on ferme l'objet, la function() se lance
    }).on("close", function() {
        //Et on met ici la logique de notre programme sous la forme d'une fonction principale.
        clubEnfant(age);
    })
    }

demanderAge();