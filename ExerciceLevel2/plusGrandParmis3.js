

//Exercice 1

/**
 * compare les valeurs du tableau et affiche la plus grande valeur du tableau
 * @param {number[]} nombres liste de valeurs a comparer 
 */
function plusGrandParmis3(nombres){
    let plusGrand = nombres[0]; // stocke la valeur 
    let iteration = 1;
    while (iteration < nombres.length){
        if (nombres[iteration]>plusGrand){
            plusGrand = nombres[iteration]; 
        }
        iteration++;
    }
    console.log("[ "+nombres.join(" ,") + " ] --> " + plusGrand);
}

function demander3Nombres(){
    // va contenir les 3 nombres rentrés âr l'utilisateur
    let nombres = [];
    
    //On créé une interface de communication avec le terminal de l'utilisateur
    const readline = require('readline').createInterface({ 
        input: process.stdin,
        output: process.stdout,
    });
    
    readline.setPrompt("Veuillez entrer un nombre ");
    readline.prompt();
    
    readline.on("line", function(nombreInput) {
        //On transforme la réponse de l'utilisateur en nombre...
        input = Number(nombreInput);
        if (isNaN(input)){
            //Ici, si on rentre dans cette condition, c'est que les conditions ne sont pas remplies,
            //donc on redemande à l'utilisateur.
            readline.prompt();
        }
        
        else{
            nombres.push(input);
            console.log(nombres);// affiche l'avancée du remplissage de tableau pour l'utilisateur
            if (nombres.length < 3){ // répéte l'étape tant que j'ai pas mes 3 nombres
                input = Number(nombreInput);
                if (nombres.length != 0){
                    readline.prompt();
                }
            }
            else{
                //Enfin, on n'a plus besoin de poser de questions à l'utilisateur : on va donc fermer l'objet.
                readline.close();
            }
        }
        //Quand on ferme l'objet, la function() se lance
    }).on("close", function() {
        //Et on met ici la logique de notre programme sous la forme d'une fonction principale.
        plusGrandParmis3(nombres);
    })
}

demander3Nombres();