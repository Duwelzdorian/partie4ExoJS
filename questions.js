/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function(texte) {
  return texte.length;
}
var remplaceECar = function(texte) {
  return texte.replace("e", " ");
}
var concatString = function(texte1, texte2) {
  return texte1.concat(texte2);
}
var afficherCar5 = function(texte) {
  return texte.charAt(4);
}
var afficher9Car = function(texte) {
  return texte.substr(0, 9);
}
var majusculeString = function(texte) {
  return texte.toUpperCase();
}
var minusculeString = function(texte) {
  return texte.toLowerCase();
}
var SupprEspaceString = function(texte) {
  return texte.trim();
}
var IsString = function(texte) {
  return (typeof texte == 'string');
}
var AfficherExtensionString = function(texte) {
  // on sépare les éléments avec split() et avec pop() on cible le dernier element 'pgn'
  return texte.split('.').pop();
}
var NombreEspaceString = function(texte) {
  // autre solution
  //texte.split(' ').length-1;
  return texte.match(/[ ]/g).length;
}
var InverseString = function(texte) {
  // on casse slit() on inverse reverse()et on reconstitue join()
  return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

 // L'objet Math permet d'appliqué sur tt les éléments du tableaux
var calculPuissance = function(x, y) {
  return Math.pow(x,y);
}
var valeurAbsolue = function(nombre) {
  return Math.abs(nombre);
}
var valeurAbsolueArray = function(array) {
  return array.map(Math.abs);
}
var sufaceCercle = function(rayon) {
  return Math.round(Math.PI * (rayon * rayon));
}
var hypothenuse = function(ab, ac) {
  return (Math.hypot(ab,ac));
}
var calculIMC = function(poids,taille) {
  return Math.round(poids/(taille*taille)*100)/100;
}
