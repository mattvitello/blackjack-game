// testing get player value function
$(document).ready(function(){
var playerHand = []; 	//players current hand
var dealerHand = []; 	//dealers current hand

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

});

//scruct to define cards
function card(number,suit,value) {
	this.number = number;
	this.suit = suit;
	this.value = value;
}