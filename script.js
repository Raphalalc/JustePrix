// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()*1001);
let coup            =  0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
    let instruction = document.createElement('div');

    if(nombre<nombreAleatoire){
    instruction.textContent= '#'+coup+" (" + nombre + ") C'est plus!";
    instruction.classList.add('instruction');
    instruction.classList.add('plus');
    }
    else if(nombre>nombreAleatoire){
    instruction.textContent= '#'+coup+" (" + nombre + ") C'est moins!";
    instruction.classList.add('instruction');
    instruction.classList.add('moins');
    }
    else{
    instruction.textContent= '#'+coup+" (" + nombre + ") Félicitation vous avez trouver le juste prix!";
    instruction.classList.add('instruction');
    instruction.classList.add('fini');
    }
    document.querySelector('#instructions').prepend(instruction);
   
}

input.addEventListener('keyup',() =>{
    if(isNaN(input.value) ){
    error.style.display = 'inline';
}
else{
    error.style.display = 'none';
}
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e)=>{
   e.preventDefault();
   if(isNaN(input.value) || input.value==''){
    input.style.borderColor ='red';
   }
   else{
    coup++;
    input.style.borderColor ='silver';
    nombreChoisi = input.value;
    input.value='';
    verifier(nombreChoisi);
   }
})

