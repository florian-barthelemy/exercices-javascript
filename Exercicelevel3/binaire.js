//Exercice 3
/**
* permet de tranformer un nombre de base 10 en binaire
*/
function base10ToBinaire(){
    let nombreATransformer = readlineSyncNombreTransformeBinaire();
    let puissanceMax = 0;
    let tab = [];
    // recherche la puissance de 2 superieur au nombre
    while (Math.pow(2,puissanceMax) <= nombreATransformer){
        puissanceMax ++;
    }
    // je depasse le nombre donc mon nombre commence par un 0
    tab.push(0);
    // je démarre de la derniere puissance non remplie jusqu'à 0
    for(let iteration = puissanceMax - 1; iteration >= 0; iteration--){
        /* je vérifie si la puissance actuelle de 2 est bien plus petite que le nombre
        * si c'est le cas je retire la puissance de 2 actuelle a ce nombre et j'ajoute 1 dans le tableau
        * sinon j'ajoute 0 dans le tableau
        */
        if(Math.pow(2,iteration) <= nombreATransformer){
            nombreATransformer -= Math.pow(2,iteration);
            tab.push(1);
        }
        else
        {
            tab.push(0);
        }
    }
    // j'affiche le nombre binaire
    
    
}


/**
* demande à un utilisateur de rentrer un nombre à transformer en binaire
* @returns {number} nombre à tranformer en binaire
*/
function readlineSyncNombreTransformeBinaire(){ 
    let nombre = 0;
    var readlineSync = require("readline-sync");
    /*repose la question tant que la réponse utilisateur n'est pas un nombre 
    ou un nombre positif*/
    while (isNaN(nombre) || nombre <= 0){
        nombre = readlineSync.question("Veuillez saisir le nombre à transformer en binaire ");
    }
    return  parseInt(nombre);
}

/**
* demande à un utilisateur de rentrer un nombre à transformer et la base voulue pour le transformer
* @returns {number[]} nombre à tranformer et la base pour transformer
*/
function readlineSyncNombreTransformeBase(){ 
    let nombre = 0;
    let base = 0;
    var readlineSync = require("readline-sync");
    /*repose la question tant que la réponse utilisateur n'est pas un nombre 
    ou un nombre positif*/
    while (isNaN(nombre) || nombre <= 0){
        nombre = readlineSync.question("Veuillez saisir le nombre à transformer ");
    }
    while (isNaN(base) || base <= 0 || base == 10){
        base = readlineSync.question("Veuillez saisir la base pour la transformation ");
    }
    return  [parseInt(nombre), parseInt(base)];
}

/**
* permet de transformer un nombre base 10 en un autre nombre
*/
function base10ToBaseChoisi(){
    let nombreATransformerBase = readlineSyncNombreTransformeBase();
    let puissanceMax = 0;
    let tab = [];
    // recherche la puissance de la base superieur au nombre
    while (Math.pow(nombreATransformerBase[1],puissanceMax) <= nombreATransformerBase[0]){
        puissanceMax ++;
    }
    tab.push(0);
    for(let iteration = puissanceMax - 1; iteration >= 0; iteration--){
        /* je vérifie si la puissance actuelle de la base est bien plus petite que le nombre
        * si c'est le cas je retire la puissance de la base actuelle a ce nombre et j'ajoute la valeur dans le tableau
        * sinon j'ajoute 0 dans le tableau
        */
        let compteur = 0; 
        while(Math.pow(nombreATransformerBase[1],iteration) <= nombreATransformerBase[0]){
            nombreATransformerBase[0] -= Math.pow(nombreATransformerBase[1],iteration);
            compteur ++;
        }
        tab.push(convertToBase36(compteur));
    }
    // j'affiche le nombre traduit dans la base souhaitée
    console.log(tab.join(" "));
}

/**
* convertit en base 36 un nombre
* @param {number} nombre nombre à convertir en alphabet
*/
function convertToBase36(nombre){
    switch(nombre) {
        case 10 :
        return "A";
        
        case 11 :
        return "B";
        
        case 12 :
        return "C";
        
        case 13 :
        return "D";
        
        case 14 : 
        return "E";
        
        case 15 :
        return "F";
        
        case 16 :
        return "G";
        
        case 17 :
        return "H";
        
        case 18 :
        return "I";
        
        case 19 : 
        return "J";
        
        case 20 :
        return "K";
        
        case 21 :
        return "L";
        
        case 22 :
        return "M";
        
        case 23 :
        return "N";
        
        case 24 :
        return "O";
        
        case 25 :
        return "P";
        
        case 26 :
        return "Q";
        
        case 27 :
        return "R";
        
        case 28 :
        return "S";
        
        case 29 :
        return "T";
        
        case 30 :
        return "U";
        
        case 31 :
        return "V";
        
        case 32 :
        return "W";
        
        case 33 :
        return "X";
        
        case 34 :
        return "Y";
        
        case 35 :
        return "Z";
        
        /* si la valeur ne correspond à aucun au dessus en supposant qu'on est sur maximum une base 36
        *  alors la case defaut contient les digits
        */
        default :
        return nombre;
    }
    
}


//base10ToBinaire();
base10ToBaseChoisi();

