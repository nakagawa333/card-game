const cards = document.querySelectorAll('.memory-card'); //Document の querySelectorAll() メソッドは、与えられた CSS セレクターに一致する文書中の要素のリストを示す静的な (生きていない) NodeList を返します。

let hasFilppedCard = false;
let firstCard,secondCard;
function filpCard(){
	this.classList.toggle('flip');

	if(!hasFilppedCard){
		hasFilppedCard = true;
		firstCard = this;
	} else{
		//second click 
		hasFilppedCard = false;
		secondCard = this;

		if(firstCard.dataset.framework === secondCard.dataset.framework){
			//要素の削除
			firstCard.removeEventListener("click",filpCard);
			secondCard.removeEventListener("click",filpCard);
		}
		console.log("function was executed!")
	}
}

cards.forEach(card => card.addEventListener('click',filpCard))
