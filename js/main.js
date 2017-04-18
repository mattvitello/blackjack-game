var playerHand = []; 	//players current hand
var playerHand2 = [];

var dealerHand = []; 	//dealers current hand
var usedCard = []; 		//used cards 
var roundOver;
var beenSplit = 0;
var beenHit = 0;
var splited = 0;
var secondHand = 0;
var firstHand = 0;

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

$(document).ready(function(){	
	playerHand = []; 	//players current hand
	dealerHand = []; 	//dealers current hand
	playerHand2 = [];
	usedCard = []; 		//used cards 
	roundOver;
	next();		//initialize hands
});


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

$("#double").click(function(){
	if (roundOver != 1){
		if(beenHit != 1){
			double();
		}
	}
});

$("#split").click(function(){
	if (roundOver != 1){
		if(firstHand){
			if(playerHand[0].number == playerHand[1].number){
				split();
			}
		}
	}
});

//reset hand 
$( "#next-btn" ).click(function() {
	next();
});

function next(){
	playerHand = []; 	
	dealerHand = [];
	playerHand2 = [];
	beenSplit = 0;
	beenHit = 0;
	splited = 0;
	secondHand = 0;
	firstHand = 0;
	$( ".cards" ).remove();		
	$('#lose').hide();
	$('#lose2').hide();
	$('#win').hide();
	$('#win2').hide();
	$('#draw').hide();
	$('#draw2').hide();
	$('#next').hide();
	$('.player2-text').hide();
	$('#context').text("");
	$('#context2').text("");
	$('#results2').hide();
	$('#info2').hide();

	$('#double').css("color","#fff");
	$('#split').css("color","#fff");
	$('#hit').css("color","#fff");
	$('#stay').css("color","#fff");

	initialize();
}


function initialize(){
	roundOver = 0;
	firstHand = 1;
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
		cardContainer.className = 'col-md-1 cards pcard'; 
		document.getElementById('player-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);
			
		//add used cards to arrays
		playerHand.push(card1); 
		usedCard.push(j);
	}
	if(playerHand[0].number == playerHand[1].number){
		$('#split').css("color","#fff");
	}
	else{
		$('#split').css("color","#bbb");
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

function getPlayer2Value(){
	var PlayerValue = 0;
	var amountAce = 0;
	for (var i = 0; i < playerHand2.length; i++){
		if (amountAce == 0){
			if (playerHand2[i].number == 'ace'){
				amountAce = 1;
			}
			else{
				PlayerValue = PlayerValue + playerHand2[i].value;
			}
		}
		else{
			PlayerValue = PlayerValue + playerHand2[i].value;
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
	$('#player2-value').text(PlayerValue);
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
		if(beenSplit){
			secondHand = 1;
			$('#double').css("color","#fff");
			$( ".card1" ).css("border-left", "none");
			$( ".card2" ).css("border-left", "5px solid red");
			beenHit = 0;
		}
		else{
			roundOver = 1;
			$('#lose').show();
			$('#next').show();
			$('#context').append('<span>You went over 21</span>');

			if (usedCard.length > 40){
				usedCard = [];
			}
			$('#double').css("color","#bbb");
			$('#split').css("color","#bbb");
			$('#hit').css("color","#bbb");
			$('#stay').css("color","#bbb");
		}
	}
	else if(PlayerValue == 21){
		stay();
	}
}	

function check212(){
	var PlayerValue = getPlayer2Value();
	var Player1Value = getPlayerValue();

	if(PlayerValue > 21){
		if(Player1Value > 21){
			$('#results2').show();
			$('#info2').show();
			$('#lose2').show();
			$('#context2').append('<span>You went over 21</span>');
			$('#lose').show();
			$('#next').show();
			$('#context').append('<span>You went over 21</span>');
			roundOver = 1;
			if (usedCard.length > 40){
				usedCard = [];
			}
			$('#double').css("color","#bbb");
			$('#split').css("color","#bbb");
			$('#hit').css("color","#bbb");
			$('#stay').css("color","#bbb");
		}
		else{
			$('#results2').show();
			$('#info2').show();
			$('#lose2').show();
			$('#context2').append('<span>You went over 21</span>');

			roundOver = 1;
			if (usedCard.length > 40){
				usedCard = [];
			}
			secondHand = 0;
			splited = 0;
			stay();
		}
	}
	else if(PlayerValue == 21){
		stay();
	}
}

//simulate what happens on hit button press	
function hit(){
	$('#double').css("color","#bbb");
	firstHand = 0;
	beenHit = 1;
	//add another card
	var j = getRand();
	var card1 = cards[j];
	var number = card1.number;
	var suit = card1.suit;

	if(secondHand){
		beenSplit = 0;
		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards pcard'; 
		document.getElementById('player2-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);
		//add used cards to arrays
		playerHand2.push(card1); 
		usedCard.push(j);
		check212();
	}
	else{
		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards pcard'; 
		document.getElementById('player-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);
		//add used cards to arrays
		playerHand.push(card1); 
		usedCard.push(j);
		check21();
	}
}

function double(){
	firstHand = 0;
	//add another card
	var j = getRand();
	var card1 = cards[j]; 
	var number = card1.number;
	var suit = card1.suit;

	if(secondHand){
		beenSplit = 0;

		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards pcard'; 
		document.getElementById('player2-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);

		playerHand2.push(card1); 
		var PlayerValue = getPlayer2Value();
	}
	else{
		//add card element to HTML
		var cardContainer = document.createElement('div');
		cardContainer.className = 'col-md-1 cards pcard'; 
		document.getElementById('player-hand').appendChild(cardContainer);
		var cardImg = document.createElement('img');
		cardImg.src = "img/PNG-cards-1.3/" + number + "_of_" + suit + ".png";
		cardContainer.appendChild(cardImg);

		//add used cards to arrays
		playerHand.push(card1); 
		var PlayerValue = getPlayerValue();
	}

	usedCard.push(j);
	if(PlayerValue > 21){
		if(beenSplit){
			secondHand = 1;
			$('#double').css("color","#fff");
			$( ".card1" ).css("border-left", "none");
			$( ".card2" ).css("border-left", "5px solid red");
			beenHit = 0;
		}
		else{
			roundOver = 1;
			$('#lose').show();
			$('#next').show();
			$('#context').append('<span>You went over 21</span>');

			if (usedCard.length > 40){
				usedCard = [];
			}
			$('#double').css("color","#bbb");
			$('#split').css("color","#bbb");
			$('#hit').css("color","#bbb");
			$('#stay').css("color","#bbb");
		}
	}
	else{
		stay();
	}
}

function split(){
	$('#split').css("color","#bbb");
	firstHand = 0;
	//cards must be same value
	beenSplit = 1; 
	splited = 1;
	//take second card from playerHand and add to playerHand2
	$( ".pcard" ).remove();

	var myCardNow = playerHand[1];
	playerHand.length = 1;
	playerHand2.push(myCardNow);

	var cardContainer = document.createElement('div');
	cardContainer.className = 'col-md-1 cards pcard card1'; 
	document.getElementById('player-hand').appendChild(cardContainer);
	var cardImg = document.createElement('img');
	cardImg.src = "img/PNG-cards-1.3/" + playerHand[0].number + "_of_" + playerHand[0].suit + ".png";
	cardContainer.appendChild(cardImg);

	var cardContainer = document.createElement('div');
	cardContainer.className = 'col-md-1 cards pcard card2'; 
	document.getElementById('player2-hand').appendChild(cardContainer);
	var cardImg = document.createElement('img');
	cardImg.src = "img/PNG-cards-1.3/" + playerHand2[0].number + "_of_" + playerHand2[0].suit + ".png";
	cardContainer.appendChild(cardImg);	

	//update values
	getPlayerValue();
	getPlayer2Value();
	getDealerValue();

	$( ".card1" ).css("border-left", "5px solid red");
	$('.player2-text').show();
}



	//simulate what happens on stay button press
function stay(){
	if(beenSplit)
	{
		secondHand = 1;
		$('#double').css("color","#fff");
		beenSplit = 0;
		$( ".card1" ).css("border-left", "none");
		$( ".card2" ).css("border-left", "5px solid red");
		beenHit = 0;
	}	
	else{
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
		var Player2Value = getPlayer2Value();

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

		//stay (hand over)
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

		if(splited){
			$('#results2').show();
			$('#info2').show();
			if (DealerValue > 21){
				$('#win2').show();
				$('#context2').text("Dealer went over 21");
			}
			else if (DealerValue > Player2Value){
				$('#lose2').show();
				$('#context2').text("Dealer had a better hand than you");
			}
			else if (DealerValue == Player2Value){
				$('#draw2').show();
				$('#context2').text("");
			}
			else{
				$('#win2').show();
				$('#context2').text("You had a better hand than the dealer");
			}
		}
			$('#double').css("color","#bbb");
			$('#split').css("color","#bbb");
			$('#hit').css("color","#bbb");
			$('#stay').css("color","#bbb");

		if (usedCard.length > 40){
			usedCard = [];
		}
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