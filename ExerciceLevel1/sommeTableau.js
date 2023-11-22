/**
 * additionne la somme d'un tableau de nombres
 * @param {number[]} nombres 
 */
function sommeTableau(nombres){
    somme = 0;
    for (iteration = 0; iteration < nombres.length; iteration++)
    {
        somme += nombres[iteration];
    }
    console.log(somme);
}

sommeTableau([4,2,8.5]);