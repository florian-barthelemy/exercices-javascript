/**
 * trouve la catégorie associé à un âge
 * @returns la catégorie associée à l'âge de l'enfant
 */
function clubEnfant(){
    let age = 15;
    //while (isNaN(age) || age<=0 ){
    //age = demanderAge();
    //}
    age = parseInt(age);
    if (age <= 12)
    {
       return "Cadet";
    }
    else if (age <= 10)
    {
        return "Minime";
    }
    else if (age <=8 )
    {
        return "Pupille";
    }
    else
    {
        return "Poussin";
    }
    
}

/**
 * demande à l'utilisateur de rentrer un âge
 * @returns l'âge saisit par l'utilisateur
 */
function demanderAge(){
    const readline = require('readline').createInterface({ input: process.stdin,    output: process.stdout,});
    //problème asynchronité readline
    readline.question("Quel est l'âge de l'enfant ? ", ageInput=> 
        {   
        return ageInput;
        })
    }

clubEnfant();