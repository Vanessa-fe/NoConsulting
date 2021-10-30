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

let position_stadier = "A1";
let numero_place = "C2";

function stadier(A1) {
    // il doit vérifier la place
    // et dire gauche, droite ou ok
    let result;
    if (A1 < 0) {
        result = "ok";
    } else if (A1) {
        result = "droite";
    } else if (A1) {
        result = "gauche";
    }
    return result;
    console.log(result);
}

