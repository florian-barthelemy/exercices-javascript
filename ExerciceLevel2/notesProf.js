//Exercice 2

/**
 * affiche pour chaque élève la remarque associé  à la note
 * @param {number[]} notes contient la liste des notes d'une classe
 */
function notesProf(notes){
    // contient les remarques liés aux notes
    let remarques = [
    "Catastrophique, il faut tout revoir",
    "Catastrophique, il faut tout revoir",
    "Catastrophique, il faut tout revoir",
    "Catastrophique, il faut tout revoir",
    "Insuffisant",
    "Insuffisant",
    "Insuffisant",
    "Insuffisant",
    "Insuffisant",
    "Insuffisant",
    "Peut mieux faire",
    "Peut mieux faire",
    "Peut mieux faire",
    "Peut mieux faire",
    "Bien",
    "Bien",
    "Bien",
    "Excellent, bon travail",
    "Excellent, bon travail",
    "Excellent, bon travail"
]

    for (iteration = 0; iteration < notes.length; iteration++ ){
        console.log(remarques[notes[iteration]]);
    }
}

notesProf([4,3,5,8,12,18,10]);