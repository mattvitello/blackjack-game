$(document).ready(function(){
	
	var playerHand = []; 	//players current hand
	var dealerHand = []; 	//dealers current hand

	//add cards to this array and when you get a random card check that it hasn't already been used. 
	//once the used card total >= 40, reset after that hand has been played.  
	//only has to be value between 0-51 as there are 52 indexes in cards array.
	var usedCard = []; 

	var cards = [
		new card('2', 'clubs', 2),
		new card('3', 'clubs', 3),
		new card('4', 'clubs', 4),
		new card('5', 'clubs', 5),
		new card('6', 'clubs', 6),
		new card('7', 'clubs', 7),
		new card('8', 'clubs', 8),
		new card('9', 'clubs', 9),
		new card('10', 'clubs', 10),
		new card('jack', 'clubs', 11),
		new card('queen', 'clubs', 12),
		new card('king', 'clubs', 13),
		new card('ace', 'clubs', 14),    //will have to implement function where this value is either 14 or 1
		new card('2', 'diamonds', 2),
		new card('3', 'diamonds', 3),
		new card('4', 'diamonds', 4),
		new card('5', 'diamonds', 5),
		new card('6', 'diamonds', 6),
		new card('7', 'diamonds', 7),
		new card('8', 'diamonds', 8),
		new card('9', 'diamonds', 9),
		new card('10', 'diamonds', 10),
		new card('jack', 'diamonds', 11),
		new card('queen', 'diamonds', 12),
		new card('king', 'diamonds', 13),
		new card('ace', 'diamonds', 14),    //will have to implement function where this value is either 14 or 1
		new card('2', 'hearts', 2),
		new card('3', 'hearts', 3),
		new card('4', 'hearts', 4),
		new card('5', 'hearts', 5),
		new card('6', 'hearts', 6),
		new card('7', 'hearts', 7),
		new card('8', 'hearts', 8),
		new card('9', 'hearts', 9),
		new card('10', 'hearts', 10),
		new card('jack', 'hearts', 11),
		new card('queen', 'hearts', 12),
		new card('king', 'hearts', 13),
		new card('ace', 'hearts', 14),    //will have to implement function where this value is either 14 or 1
		new card('2', 'spades', 2),
		new card('3', 'spades', 3),
		new card('4', 'spades', 4),
		new card('5', 'spades', 5),
		new card('6', 'spades', 6),
		new card('7', 'spades', 7),
		new card('8', 'spades', 8),
		new card('9', 'spades', 9),
		new card('10', 'spades', 10),
		new card('jack', 'spades', 11),
		new card('queen', 'spades', 12),
		new card('king', 'spades', 13),
		new card('ace', 'spades', 14),    //will have to implement function where this value is either 14 or 1
	];

	initialize()		//initialize hands


	$( "#hit" ).click(function() {
		alert("You been hit mate");
		//hit(); 
	});

	$( "#stay" ).click(function() {
		alert("You staying here homie");
		//stay();
	});


	function initialize(){

		//Initialize first two dealer cards
		for (var i = 0; i<2; i++){
			var j = getRand();
			var card1 = cards[j]; 
			var number = card1.number;
			var suit = card1.suit;

			//add card element to HTML
			var cardContainer = document.createElement('div');
			cardContainer.className = 'col-md-1'; 
			document.getElementById('dealer-hand').appendChild(cardContainer);
			var cardImg = document.createElement('img');
			cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
			cardContainer.appendChild(cardImg);

			//add used cards to arrays
			dealerHand.push(card1); 
			usedCard.push(j);
		}

		//Initialize first two player cards
		for (var i = 0; i<2; i++){
			var j = getRand();
			var card1 = cards[j]; 
			var number = card1.number;
			var suit = card1.suit;

			//add card element to HTML
			var cardContainer = document.createElement('div');
			cardContainer.className = 'col-md-1'; 
			document.getElementById('player-hand').appendChild(cardContainer);
			var cardImg = document.createElement('img');
			cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
			cardContainer.appendChild(cardImg);

			//add used cards to arrays
			playerHand.push(card1); 
			usedCard.push(j);
		}
		
	}


	//scruct to define cards
	function card(number,suit,value) {
		this.number = number;
		this.suit = suit;
		this.value = value;
	} 

	//get random card that hasn't already been used
	function getRand(){
		var cardExists = false;
		var j = Math.floor(Math.random()*52);

		while(true){
			//loop through usedcards and check each against current selection
			for(var i = 0; i < usedCard.length; i++){
				if(usedCard[i] == j){
					j = Math.floor(Math.random()*52);
					cardExists = true; 
				}
			}
			//if the card is found restart loop
			if(cardExists){
				cardExists = false; 
			}
			else{
				break;
			}
		}

		return j;
	}


	/* TO-DO */

	//after we do things check if user or dealer is at 21 or bust
	function check21(){

	}

	//simulate what happens on hit button press
	function hit(){

	}

	//simulate what happens on stay button press
	function stay(){

	}

	//implement scare tactic 
	function scare(){

	}

	//implement count
	function count(){

	}


});