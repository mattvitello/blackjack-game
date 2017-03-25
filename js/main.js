$(document).ready(function(){
	
	var playerHand = []; 	//players current hand
	var dealerHand = []; 	//dealers current hand
	var usedCard = []; 		//used cards 
	var roundOver;

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
		if (roundOver != 1){
			hit();
		}
	});

	$( "#stay" ).click(function() {
		if (roundOver != 1){
			stay();
		}
	});

	//reset hand 
	$( "#next-btn" ).click(function() {
		next();
	});

	function next(){
		playerHand = []; 	
		dealerHand = [];
		$( ".cards" ).remove();	
		$('#lose').hide();
		$('#win').hide();
		$('#draw').hide();
		$('#next').hide();
		$('#context').text("");
		initialize();
	}
	

	function initialize(){
		roundOver = 0;
		//Initialize first two dealer cards
		var j = getRand();
		var card1 = cards[j]; 
		var number = card1.number;
		var suit = card1.suit;

		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards'; 
		document.getElementById('dealer-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);

		//add used cards to arrays
		dealerHand.push(card1); 
		usedCard.push(j);

		//add back card
		var cardContainer2 = document.createElement('div');
		cardContainer2.className = 'col-md-1 cards'; 
		cardContainer2.id = "cardBack";
		document.getElementById('dealer-hand').appendChild(cardContainer2);
		var cardImg2 = document.createElement('img');
		cardImg2.src = "img/PNG-cards-1.3/card-back.png";
		cardContainer2.appendChild(cardImg2);


		//Initialize first two player cards
		for (var i = 0; i<2; i++){
			var j = getRand();
			var card1 = cards[j]; 
			var number = card1.number;
			var suit = card1.suit;

			//add card element to HTML
			var cardContainer = document.createElement('div');
			cardContainer.className = 'col-md-1 cards'; 
			document.getElementById('player-hand').appendChild(cardContainer);
			var cardImg = document.createElement('img');
			cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
			cardContainer.appendChild(cardImg);

			//add used cards to arrays
			playerHand.push(card1); 
			usedCard.push(j);
		}

		getPlayerValue();
		getDealerValue();		
		
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

	//returns value of players hand 
	function getPlayerValue(){
		var PlayerValue = 0;
		var amountAce = 0;
		for (var i = 0; i < playerHand.length; i++){
			if (amountAce == 0){
				if (playerHand[i].number == 'ace'){
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
		if(amountAce == 1){
			if(PlayerValue <= 10){
				PlayerValue = PlayerValue + 11;
			}
			else{
				PlayerValue = PlayerValue + 1;
			}
		}
		$('#player-value').text(PlayerValue);

		return PlayerValue;
	}

	//returns value of dealers hand
	function getDealerValue(){
		var DealerValue = 0;
		var amountAce = 0;
		for (var i = 0; i < dealerHand.length; i++){
			if (amountAce == 0){
				if (dealerHand[i].number == 'ace'){
					amountAce = 1;
				}
				else{
					DealerValue = DealerValue + dealerHand[i].value;
				}
			}
			else{
				DealerValue = DealerValue + dealerHand[i].value;
			}
		}
		if(amountAce == 1){
			if(DealerValue <= 10){
				DealerValue = DealerValue + 11;
			}
			else{
				DealerValue = DealerValue + 1;
			}
		}
		$('#dealer-value').text(DealerValue);

		return DealerValue;
	}

	//after we do things check if user or dealer is at 21 or bust
	function check21(){
		var PlayerValue = getPlayerValue();
		if(PlayerValue > 21){
			roundOver = 1;
			$('#lose').show();
			$('#next').show();
			$('#context').append('<span>You went over 21</span>');
		}
		else if(PlayerValue == 21){
			stay();
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
		cardContainer.className = 'col-md-1 cards'; 
		document.getElementById('player-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);

		//add used cards to arrays
		playerHand.push(card1); 
		usedCard.push(j);

		check21();
	}

	//simulate what happens on stay button press
	function stay(){
		$('#cardBack').hide();
		
		var j = getRand();
		var card1 = cards[j]; 
		var number = card1.number;
		var suit = card1.suit;

		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards'; 
		document.getElementById('dealer-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);

		//add used cards to arrays
		dealerHand.push(card1); 
		usedCard.push(j);

		var DealerValue = getDealerValue();
		var PlayerValue = getPlayerValue();

		//if dealer < 17 
		while(DealerValue < 17){
			var j = getRand();
			var card1 = cards[j]; 
			var number = card1.number;
			var suit = card1.suit;

			//add card element to HTML
			var cardContainer = document.createElement('div');
			cardContainer.className = 'col-md-1 cards'; 
			document.getElementById('dealer-hand').appendChild(cardContainer);
			var cardImg = document.createElement('img');
			cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
			cardContainer.appendChild(cardImg);

			//add used cards to arrays
			dealerHand.push(card1); 
			usedCard.push(j);

			DealerValue = getDealerValue();
		}
		
		roundOver = 1;

		//else stay (hand over)
		if (DealerValue > 21){
			$('#win').show();
			$('#next').show();
			$('#context').text("Dealer went over 21");
		}
		else if (DealerValue > PlayerValue){
			$('#lose').show();
			$('#next').show();
			$('#context').text("Dealer had a better hand than you");
		}
		else if (DealerValue == PlayerValue){
			$('#draw').show();
			$('#next').show();
			$('#context').text("");
		}
		else{
			$('#win').show();
			$('#next').show();
			$('#context').text("You had a better hand than the dealer");
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