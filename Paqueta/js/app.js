// Les éléments :
// - 1 rectangle,
// - 4 stadiers (1 à chaque angles),
// - Des supporters (4)

// Chaîne de caractère : (j'utiliserai plutôt le mot variable)
// - position_stadier,
// - numero_place

// Résultats attendus :
// - Gauche,
// - Droite,
// - Ok

// Les stadiers dans le coin me perturbe, je ne sais pas où les imaginer dedans ou en dehors du rectangle je pars du
// principe que ce sont des stadiers donc ils sont dehors mais là c'est imagé alors...

// Il y a un supporter qui arrive devant un stadier (ça me rappel une blague de nain dans une forêt ça) et il veut
// savoir s'il est au bon endroit et là le stadier lui répond "gauche" "droite" ou "ok".

// J'imagine un rectangle divisé en section avec des lettres sur l'axe X et des chiffres sur l'axe Y
// Ceci définira les places des supporters : place A2, B1 ...
// Les stadiers auraient comme position les places des 4 coins. Ou alors est-ce qu'il faudrait une autre identification
// pour leur position ?

// Donc il va falloir faire une condition qui vérifie la place du ticket
// function vérifierLaPlace() {
//      if (numero_place )
//
//     return "gauche";
//     return "droite";
//     return "ok";
//  },

// fonctionnement :
// - au clique : on créé un tableau où on place les stadiers au 4 coins, lorsque l'utilisateur (qui serait donc
//   considéré comme le supporter) clique sur une case de stadier il y a une vérif de la place --- idée bof
//
// Le stadier doit indiquer la direction au supporter
// Je dois avoir un 'numero_place' à comparer avec la 'position_stadier'
// position_stadier st1 : A2, A3, B1, B2, B3 = ok
//                        C1, D1, C2, D2, C3, D3 = droite

//let grid = {
// Je créée un tableau pour positionner les stadiers
// Je place les stadiers à chaque coins du rectangle (stade)
// Mes stadiers sont représentés par des petits 'st1', 'st2', 'st3', 'st4'
//   cells : [
//     ['st1', '', '', 'st2'],
//    ['', '', '', ''],
//  ['', '', '', ''],
//['', '', '', ''],
//['', '', '', ''],
//['st3', '', '', 'st4']
//],

// Les stadiers ont une place fixe attitré
// Un numéro est généré aléatoirement pour les places, mais est-ce que le format "A2" pourra être reconnu
// Sinon une lettre aléatoire + un chiffre aléatoire et faire une concaténation
// Ou récupérer aléatoirement les axes X et Y du tableau en excluant les cellules des stadiers



// Test de fonction pour générer des numéro de place aléatoire pour les supporter
// Je me suis inspiré du code d'un exercice de ma formation où on voulait générer des éléments aléatoires
/*function makeId(length) {
    let result = '';
    let characters = 'ABCD123456'; // j'indique les caractères que je souhaite
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(makeId(2));*/

// Cette fonction fonctionne mais peut me générer 2 chiffres ou 2 lettres hors je veux 1 lettre et 1 chiffre
// Je vais me faire un café jeter mon ordi par la fenêtre et je reviens.

// Là je vais essayer de faire donc 2 fonctions puis de les concaténer peut-être ?
function makeLetter(length) {
    let result = '';
    let characters = 'ABCD';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//console.log(makeLetter(1));
// CA FONCTIONNE !!!!! Oui j'ai été rechercher mon pc dehors j'ai eu pitié (et je veux travailler :D)

function makeNumber(length) {
    let result = '';
    let number = '123456';
    let numberLength = number.length;
    for (let i = 0; i < length; i++ ) {
        result += number.charAt(Math.floor(Math.random() * numberLength));
    }
    return result;
}
//console.log(makeNumber(1));
// CA FONCTIONNE AUSSI !!!!!

//alert(makeLetter(1) + makeNumber(1))
// Bon ça fonctionne aussi ! Mais c'est dans une fenêtre, faut trouver autre chose

 let numero_place = (makeLetter(1) + makeNumber(1));
// Fonctionne pas (forcément si tu fais pas console.log tu vas pas aller loin... ^^
// console.log(numero_place);
// FONCTIONNE !!

// Bon maintenant qu'on a la place de généré le stadier va pouvoir guider
// Faire une fonction stadier qui reprend numero_place et qui retourne suivant des paramètres la direction

/*function oneDirection() {
    // Je test de mettre les fonctions dans cette fonction

    let numero_place = (makeLetter(1) + makeNumber(1));
    // il doit vérifier la place
    // et dire gauche, droite ou ok
    let result;
    let position_stadier = [['A1'], ['A6'], ['D1'], ['D6']];
    if (position_stadier === numero_place) {
        result = "ok";
    } else if (position_stadier !== numero_place) {
        result = "non";
    } /!*else if (position_stadier === numero_place) {
        result = "gauche";
    }*!/
    //return result;
    console.log(result);
}
//console.log(oneDirection);
oneDirection();*/

// Bon ce résultat m'affiche non systématiquement.

// Je vais faire une fonction "direction" qui va reprendre les 2 fonctions d'avant
// pour générer la lettre et le chiffre (à voir pour le faire en 1 seule fonction)
//
function oneDirection() {
    let numero_place = (makeLetter(1) + makeNumber(1));
    console.log(numero_place);
    // il doit vérifier la place
    // et dire gauche, droite ou ok
    let position_stadier = 'A6';
    let result;
    if (position_stadier === numero_place) {
        result = 'ok';
    } else {
        result = 'non';
    } /*else if (position_stadier === numero_place) {
        result = "gauche";
    }*/
    return result;
    //console.log(result);
}
console.log(oneDirection);
oneDirection();



