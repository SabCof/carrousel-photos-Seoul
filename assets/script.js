const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');

let count =0; // 1ere image
function slideSuivante(){
	items[count].classList.remove('active'); 
// on enleve la class active donc l'image va disparaitre
	if(count < nbSlide - 1){
		count++;
	}else{
		count = 0;
	};

	items[count].classList.add('active')
	console.log(count);
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
	items[count].classList.remove('active');

	if(count > 0){
		count--;
	}else{
		count = nbSlide - 1;
	};

	items[count].classList.add('active')

}

precedent.addEventListener('click', slidePrecedente);

function toucheClavier(e){
	if(e.keyCode === 37){     //37 numéro de la fleche gauche sur notre clavier
		slidePrecedente();
	} else if (e.keyCode === 39){  //39 numéro de la flèche droite sur notre clavier
		slideSuivante()
	} 
}
document.addEventListener('keydown',toucheClavier)