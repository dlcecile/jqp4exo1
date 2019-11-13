$(function(){
  var choice;
  var userchoice;
  // var result;
// $('#compare').click(function(){
//   var utilisateur = $('#players option:selected').text();
// // option:selected permet de récupérer celui qui est selectionner
//   alert(utilisateur)

$('option').click(function(){
// je récupère le choix de l'utilisateur via option du html.
  userchoice = $(this).val();
 // alert(userchoice)
});
// créer une fonction qui choisit au hasard un choix pour l'ordinateur

$(document).click(function computerChoice(){
  choice = Math.floor((Math.random() * 3) + 1);
// donnera soit un deux ou trois
// associer la sortie à pierre, feuille, Ciseaux
if(choice ==1){
  choice = 'Pierre'
}
else if (choice ==2){
  choice ='Feuille'
// le double égale n'est pas nécessaire dans les accolades mais nécessaire dans les paramétres de la fonction et permet de récupérer la valeur 1 à Pierre
}
else{
  choice = 'Ciseaux'
};
// on a créer le choix aléatoire de l'ordinateur
// alert(choice)
})

// // on va comparer les résultats
$('#compare').click(function compareResult(){
// // j'initialise ma fonction au clique
// alert('cliquer') ok
if (choice == 'Pierre' && userchoice == 'Pierre'){
  result = 'Match nul';
}
else if (choice == 'Ciseaux' && userchoice == 'Ciseaux'){
  alert = 'Match nul';
}
else if( choice == 'Feuille' && userchoice == 'Feuille'){
  result = 'Match nul';
}
else if (choice == 'Pierre' || userchoice == 'Ciseaux'){
  result = 'perdu'
}
else if (choice == 'Pierre' || userchoice == 'Feuille'){
  result = 'perdu'
}
else if (choice == 'Ciseaux' || userchoice == 'Feuille'){
  result = 'perdu'
}
else if (choice == 'Feuille' || userchoice == 'Pierre'){
  result = 'gagné'
}
else if (choice == 'Ciseaux' || userchoice == 'Pierre'){
  result = 'gagné'
}
else if (choice == 'Feuille' || userchoice == 'Ciseaux'){
  result = 'gagné'
}

 })

// je dois créer une fonction qui au résultat attribut la victoire à l'ordinateur ou à l'utlisateur

});
