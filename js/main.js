$(document).ready(function(){
	
	var playerHand = []; 	//players current hand
	var dealerHand = []; 	//dealers current hand
	var usedCard = []; 		//used cards 

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
		new card('jack', 'clubs', 10),
		new card('queen', 'clubs', 10),
		new card('king', 'clubs', 10),
		new card('ace', 'clubs', 1),    //will have to implement function where this value is either 11 or 1
		new card('2', 'diamonds', 2),
		new card('3', 'diamonds', 3),
		new card('4', 'diamonds', 4),
		new card('5', 'diamonds', 5),
		new card('6', 'diamonds', 6),
		new card('7', 'diamonds', 7),
		new card('8', 'diamonds', 8),
		new card('9', 'diamonds', 9),
		new card('10', 'diamonds', 10),
		new card('jack', 'diamonds', 10),
		new card('queen', 'diamonds', 10),
		new card('king', 'diamonds', 10),
		new card('ace', 'diamonds', 1),    //will have to implement function where this value is either 11 or 1
		new card('2', 'hearts', 2),
		new card('3', 'hearts', 3),
		new card('4', 'hearts', 4),
		new card('5', 'hearts', 5),
		new card('6', 'hearts', 6),
		new card('7', 'hearts', 7),
		new card('8', 'hearts', 8),
		new card('9', 'hearts', 9),
		new card('10', 'hearts', 10),
		new card('jack', 'hearts', 10),
		new card('queen', 'hearts', 10),
		new card('king', 'hearts', 10),
		new card('ace', 'hearts', 1),    //will have to implement function where this value is either 14 or 1
		new card('2', 'spades', 2),
		new card('3', 'spades', 3),
		new card('4', 'spades', 4),
		new card('5', 'spades', 5),
		new card('6', 'spades', 6),
		new card('7', 'spades', 7),
		new card('8', 'spades', 8),
		new card('9', 'spades', 9),
		new card('10', 'spades', 10),
		new card('jack', 'spades', 10),
		new card('queen', 'spades', 10),
		new card('king', 'spades', 10),
		new card('ace', 'spades', 1),    //will have to implement function where this value is either 14 or 1
	];

	initialize()		//initialize hands


	$( "#hit" ).click(function() {
		hit(); 
	});

	$( "#stay" ).click(function() {
		alert("You staying here homie");
		//stay();
	});


	function initialize(){

		//Initialize first two dealer cards
		for (var i = 0; i<1; i++){
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
		var PlayerValue = 0;
		var amountAce = 0;
		for (var i = 0; i < playerHand.length; i++){
			if (amountAce == 0){
				if (playerHand[i].number == "ace"){
					amountAce = 1;
				}
				else{
					PlayerValue = PlayerValue + playerHand[i].value;
				}
			}
			else{
				PlayerValue = PlayerValue + playerHand[i].value;
			}
		}
		if(PlayerValue <= 10){
			PlayerValue = PlayerValue + 11;
		}
		else{
			PlayerValue = PlayerValue + 1;
		}

		if(PlayerValue > 21){
			//bust
		}
		else if(PlayerValue == 21){
			//win
		}
		else{
			//not over
		}
	}	

	//simulate what happens on hit button press
	function hit(){
		//add another card
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

		//check21();
	}

	//simulate what happens on stay button press
	function stay(){
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

		//check dealer's value
		var DealerValue = 0;
		for (var i = 0; i < dealerHand.length; i++){
			DealerValue = DealerValue + dealerHand[i].value;
		}

		var PlayerValue = 0;
		for (var i = 0; i < playerHand.length; i++){
			PlayerValue = PlayerValue + playerHand[i].value;
		}

		//if dealer < 17 
		while(DealerValue < 17){
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

			DealerValue = DealerValue + card1.value;
		}
		
		//else stay (hand over)
		if (DealerValue > 21){
			//bust
			//Put "Player wins!" on screen
			//Add button to go to next hand 
		}
		else if (DealerValue > PlayerValue){
			//Dealer win
		}
		else if (DealerValue == PlayerValue){
			//push 
		}
		else{
			//Player win 
		}

	}

	//implement scare tactic 
	function scare(){

	}

	//implement count
	function count(){
		//JUST DISPLAY IN LITTLE BOX IN CORNER OF GAME, WILL NEED + or - SIGN BEFORE NUMBER
		//count starts at 0 when game begins
		//if card on table = 2, 3, 4, 5, 6, add 1 to the count
		//if card on table = 7, 8, 9 add 0 to the count
		//if card on table = 10, J, Q, K, Ace subtract 1 from the count
	}


});