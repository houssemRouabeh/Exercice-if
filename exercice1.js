// var titre = document.getElementById("titre").innerText;

// console.log(titre);

// var utilisateur = {
//   prenom: "Omar",
//   nom: "Atta",
// };

// console.log(titre, " ", utilisateur.prenom, " ", utilisateur.nom); //Bonjour Omar ATTa

// var etudiants = [
//   "Ahmed",
//   "mohamed",
//   "aziz",
//   "khalil",
//   "amal",
//   "nour",
//   "khalil2",
// ]; //array

// console.log(etudiants);

// = affectation
// == comparaison   5==='5' false
// >= <=
// && and || or

// if (conditions) {
//     exexuction
// }elseif (condition 2){
//     execution 2
// }else{}

// if (etudiants[0] == "omar") {
//   console.log("Bonjour " + etudiants[0]);
// } else {
//   console.log("Bonjour " + etudiants[1]);
// }

//operations arethmitiques

// var a = 10;
// var b = 3;

// console.log(a % b);

//exercice année biséxtile

// var annee = document.getElementsByClassName("input"); //tableau d'elements html
// var annee = document.getElementsByName("input"); //tableau d'elements html
// var annee = document.getElementsByTagName("input"); //tableau d'elements html
// var annee = document.getElementById("inputYear"); //element html
// var form = document.getElementById("form");

// //form.addEventListener("evenement", fonction);

// form.addEventListener("submit", function (event) {
//   //ecouteur d'evenement
//   event.preventDefault(); //arreter le comportement de rafraichissement par defaut de JS
//   if (annee.value != 0) {
//     if (annee.value % 2 == 0) {
//       //condition reste de la division pour verifier l'année
//       console.log("Année bisextile");
//     } else {
//       console.log("Année non bisextile");
//     }
//   } else {
//     console.log("l'année doit etre differ,te de zero");
//   }
// });

// var a = 5;
// var b = 6;

// //a = a + b;
// // a += b;

// // a++;
// // a--;

// console.log(a);

// var c = ((a - b) * 12) / 5;
// console.log(c);

//exercice d'evenements

/*utilisateur il va rentrer son:
  nom
  prenom
  date de naissance 
  téléphone
lors du submit
les valeurs recuprés
vous allez les faire rentrer dans un objet qui s'appelle user

var user ={
  nom : "",
  prenom :"",
  dateNaiss :"",
  telephone:""
}
console.log(user)*/

// var form = document.getElementById("form");
// var inputs = document.getElementsByClassName("input");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // var nom = inputs[0].value;
//   // var prenom = inputs[1].value;
//   // var dateNaissance = inputs[2].value;
//   // var tel = inputs[3].value;
//   var user = {
//     nom: inputs[0].value,
//     prenom: inputs[1].value,
//     dateNaissance: inputs[2].value,
//     tel: inputs[3].value,
//   };

//   console.log(user);
// });

// var a = 5;

// console.log("Notre variable = " + ++a);
// for (let index = 0; index < 10; index++) {}
// console.log(index);

// var a = 5;
// var b = "5";

// console.log(a == b); //comapraison a egamlité de valeur =>
// console.log(a === b); //comapraison a egamlité de valeur et type de variable =>
// >=
// <=
// !=
//"DRY  dont repeat yourself";

//debut fin pat

// tantque (condition==true){
//   execution
// }

// var message = prompt("donner une valeur positif");
// while (message < 0) {
//   message = prompt("donner une valeur positif");
// }
// console.log("votre nombre poditif = ", message);

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var annee = document.getElementById("inputYear"); //element html
// var form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   //ecouteur d'evenement
//   event.preventDefault(); //arreter le comportement de rafraichissement par defaut de JS
//   while (annee.value < 2000) {
//     return alert("merci de faire reny=trer une année inferieure a 2000");
//   }
//   if (annee.value != 0) {
//     if (annee.value % 2 == 0) {
//       //condition reste de la division pour verifier l'année
//       console.log("Année bisextile");
//     } else {
//       console.log("Année non bisextile");
//     }
//   } else {
//     console.log("l'année doit etre differ,te de zero");
//   }
// });

// var fruits = ["fraise", "orange", "banane", "kiwi", "pomme"];

// var fruit = "ananas";
// fruits.push(fruit);
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
/*
utiliser le meme formulaire user
chaque fois que l'utilisateur fait rentrer un nouveau user 
un objet user sera créer avec les informations ecrites 
cet objet user sera inserer dans un tableau users
parcourir tout les elements du tableau users
*/

// var form = document.getElementById("form");
// var inputs = document.getElementsByClassName("input");

// var user = {};
// var users = [];
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   user = {
//     nom: inputs[0].value,
//     prenom: inputs[1].value,
//     dateNaissance: inputs[2].value,
//     tel: inputs[3].value,
//   };
//   users.push(user);
//   for (var i = 0; i < users.length; i++) {
//     console.log(users[i]);
//   }
// });

/***********Fonctions***********/
