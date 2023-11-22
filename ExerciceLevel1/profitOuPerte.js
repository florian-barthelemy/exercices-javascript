//Exercice 5
/**
 * dit si un objet/produit est vendu à perte ou à profit
 * @param {number} prixFabrication prix de fabrication de l'objet/du produit
 * @param {number} prixVente prix de vente de l'objet/du produit
 */
function profitOuPerte(prixFabrication, prixVente){
    if (prixFabrication>prixVente)
    {
        console.log("Perte");
    }
    else
    {
        console.log("Profit");
    }
}

profitOuPerte(5,45);