# NoConsulting

Ce repo contient le code (enfin pour l'instant mes commentaires) pour les tests techniques.

### Test 1 - Stadier, un métier, une passion

Le stade Bollaert accueille bientôt un match décisif pour le classement de son équipe de football. Et ... à cette occasion, de nouveaux stadiers sont recrutés afin d'aiguiller au mieux chacun des supporters aux entrées de l'enceinte.
On considère dans la suite de cet énoncé que l'enceinte est un rectangle où à chaque coin se trouve un stadier junior.
Pour aider ces stadiers vous devrez développer un programme qui permettra d'aiguiller chacun des supporters en fonction de la position courante du stadier.
Il est donc question de dire au supporter s'il doit aller à gauche, à droite ou s'il se trouve à la bonne entrée.

Le programme prendra donc en entrée une chaine de caractère de la forme suivante :

position_stadier numero_place

et devra renvoyer un résultat qui sera soit :
- gauche si le supporter doit se diriger vers l'entrée se trouvant à sa gauche
- droite si le supporter doit se diriger vers l'entrée se trouvant à sa droite
- ok si le supporter est à la bonne entrée

### Test 2 -  VOYAGE EN BUS

Dans cet exercice on doit aider l'usager en renvoyant les propositions de trajets d'autocar qui relient deux grandes villes : Lille vers Paris.
Arras et Compiègne sont deux villes dans lesquelles les bus sont susceptibles de s'arrêter.
Lorsque l'autocar s'arrête dans l'une de ces deux villes étape, la durée du trajet augmente de 30 minutes, mais le prix du trajet diminue de 2€.
Le trajet direct de Lille vers Paris dure 3h00 et coûte 10€.
Le programme devra renvoyer quel est le trajet idéal en fonction d'un budget et d'un temps de voyage maximum.

Exemple :

Si le budget est de 8€ et le temps de voyage maximum est de 4h00 le programme doit renvoyer :
Lille, Arras, Paris
Lille, Compiègne, Paris
Lille, Arras, Compiègne, Paris

Si le budget est de 10€ et le temps de voyage maximum est de 3h00 le programme doit renvoyer :
Lille, Paris

### Test 3 - CONTAMINATION D'UN CUBE

Un groupe de scientifiques s'intéresse au temps nécessaire qu'un virus prends pour contaminer un cube subdivisé en petits cubes.

Un cube "de largeur 3" est donc composé de 3 petits cubes en hauteur, largeur et longueur.
Le virus se comporte ainsi :
Le premier jour de la contamination, un quelconque et un seul des petits cubes est contaminé.
Le jour suivant la contamination s'étend de cette manière : chaque petit cube en contact par une face avec un cube contaminé devient lui aussi contaminé.
Chaque jour, et tant qu'il reste un cube non contaminé, l'opération se répète.

Votre programme devra afficher l'ensemble des possibilités :
c'est à dire l'évolution de la contamination en fonction du premier cube qui a été contaminé et le temps nécessaire pour contaminer l'ensemble du cube.

Votre programme devra donc par exemple être capable d'afficher le pourcentage de contamination quotidien jusqu'à la contamination soit totale.