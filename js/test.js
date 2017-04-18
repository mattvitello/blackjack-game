// testing get player value function
$(document).ready(function(){
var playerHand = []; 	//players current hand
var playerHand2 = [];
var dealerHand = []; 	//dealers current hand
var roundOver = 0;

test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
//test12();
//test13();

function test1(){
	playerHand = [];
	playerHand.push(new card('4', 'clubs', 4));
	playerHand.push(new card('1', 'clubs', 1));
	playerHand.push(new card('8', 'clubs', 8));

	value = getPlayerValue();
	if (value == 13){
		console.log("Test 1 Passed");
	}
	else{
		console.log("Test 1 Failed");
	}
}

function test2(){
	playerHand = [];
	playerHand.push(new card('ace', 'clubs', 1));

	value = getPlayerValue();
	if (value == 11){
		console.log("Test 2 Passed");
	}
	else{
		console.log("Test 2 Failed");
	}
}

function test3(){
	playerHand = [];
	playerHand.push(new card('ace', 'clubs', 1));
	playerHand.push(new card('ace', 'clubs', 1));

	value = getPlayerValue();
	if (value == 2){
		console.log("Test 3 Passed");
	}
	else{
		console.log("Test 3 Failed");
	}
}

function test4(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	playerHand.push(new card('queen', 'clubs', 10));
	playerHand.push(new card('5', 'clubs', 5));

	value = getPlayerValue();
	if (value == 25){
		console.log("Test 4 Passed");
	}
	else{
		console.log("Test 4 Failed");
	}
}
function test5(){
      dealerHand = [];
      dealerHand.push(new card('2', 'clubs', 2));
      dealerHand.push(new card('6', 'clubs', 6));
      dealerHand.push(new card('8', 'clubs', 8));
 
      value = getDealerValue();
      if (value == 16){
           console.log("Test 5 Passed");
      }
      else{
           console.log("Test 5 Failed");
      }
}
function test6(){
      dealerHand = [];
      dealerHand.push(new card('5', 'clubs', 5));
      dealerHand.push(new card('7', 'clubs', 7));
      dealerHand.push(new card('9', 'clubs', 9));
 
      value = getDealerValue();
      if (value == 21){
           console.log("Test 6 Passed");
      }
      else{
           console.log("Test 6 Failed");
      }
}
function test7(){
      dealerHand = [];
      dealerHand.push(new card('2', 'clubs', 2));
      dealerHand.push(new card('9', 'clubs', 9));
      dealerHand.push(new card('3', 'clubs', 3));
 
      value = getDealerValue();
      if (value == 14){
           console.log("Test 7 Passed");
      }
      else{
           console.log("Test 7 Failed");
      }
}
function test8(){
      dealerHand = [];
      dealerHand.push(new card('ace', 'clubs', 11));
     
      value = getDealerValue();
      if (value == 11){
           console.log("Test 8 Passed");
      }
      else{
           console.log("Test 8 Failed");
      }
}

function test9(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	playerHand.push(new card('queen', 'clubs', 10));
	playerHand.push(new card('5', 'clubs', 5));
	value = check21();
	if (value == "over"){
		console.log("Test 9 Passed");
	}
	else{
		console.log("Test 9 failed")
	}
}

function test10(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	value = check21();
	if (value == "under"){
		console.log("Test 10 Passed");
	}
	else{
		console.log("Test 10 failed")
	}
}

function test11(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	playerHand.push(new card('queen', 'clubs', 10));
	playerHand.push(new card('1', 'clubs', 1));
	value = check21();
	if (value == "21"){
		console.log("Test 11 Passed");
	}
	else{
		console.log("Test 11 failed")
	}
}

function test12(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	playerHand.push(new card('jack', 'clubs', 10));
	split();

	if (playerHand2[0] != null){
		console.log("Test 12 Passed");
	}
	else{
		console.log("Test 12 failed")
	}
}

function test13(){
	playerHand = [];
	playerHand.push(new card('jack', 'clubs', 10));
	playerHand.push(new card('queen', 'clubs', 10));
	playerHand.push(new card('5', 'clubs', 5));
	double();

	if (roundOver){
		console.log("Test 13 Passed");
	}
	else{
		console.log("Test 13 failed")
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
	//after we do things check if user or dealer is at 21 or bust
function check21(){
	var PlayerValue = getPlayerValue();
	if(PlayerValue > 21){
		return "over";
	}
	else if(PlayerValue == 21){
		return "21";
	}
	else{
		return "under";
	}
}


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
	return DealerValue;
}

});

//scruct to define cards
function card(number,suit,value) {
	this.number = number;
	this.suit = suit;
	this.value = value;
}