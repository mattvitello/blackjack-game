// testing get player value function
$(document).ready(function(){
var playerHand = []; 	//players current hand
var dealerHand = []; 	//dealers current hand

test1();

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
});

//scruct to define cards
function card(number,suit,value) {
	this.number = number;
	this.suit = suit;
	this.value = value;
}