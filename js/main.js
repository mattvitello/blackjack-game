$(document).ready(function(){
	
	function card(number,suit,value) {
		this.number = number;
		this.suit = suit;
		this.value = value;
	} 

	var cards = [
		new card('2', 'clubs', 2);
		new card('3', 'clubs', 3);
		new card('4', 'clubs', 4);
		new card('5', 'clubs', 5);
		new card('6', 'clubs', 6);
		new card('7', 'clubs', 7);
		new card('8', 'clubs', 8);
		new card('9', 'clubs', 9);
		new card('10', 'clubs', 10);
		new card('jack', 'clubs', 11);
		new card('queen', 'clubs', 12);
		new card('king', 'clubs', 13);
		new card('ace', 'clubs', 14);    //will have to implement function where this value is either 14 or 1
		new card('2', 'diamonds', 2);
		new card('3', 'diamonds', 3);
		new card('4', 'diamonds', 4);
		new card('5', 'diamonds', 5);
		new card('6', 'diamonds', 6);
		new card('7', 'diamonds', 7);
		new card('8', 'diamonds', 8);
		new card('9', 'diamonds', 9);
		new card('10', 'diamonds', 10);
		new card('jack', 'diamonds', 11);
		new card('queen', 'diamonds', 12);
		new card('king', 'diamonds', 13);
		new card('ace', 'diamonds', 14);    //will have to implement function where this value is either 14 or 1
		new card('2', 'hearts', 2);
		new card('3', 'hearts', 3);
		new card('4', 'hearts', 4);
		new card('5', 'hearts', 5);
		new card('6', 'hearts', 6);
		new card('7', 'hearts', 7);
		new card('8', 'hearts', 8);
		new card('9', 'hearts', 9);
		new card('10', 'hearts', 10);
		new card('jack', 'hearts', 11);
		new card('queen', 'hearts', 12);
		new card('king', 'hearts', 13);
		new card('ace', 'hearts', 14);    //will have to implement function where this value is either 14 or 1
		new card('2', 'spades', 2);
		new card('3', 'spades', 3);
		new card('4', 'spades', 4);
		new card('5', 'spades', 5);
		new card('6', 'spades', 6);
		new card('7', 'spades', 7);
		new card('8', 'spades', 8);
		new card('9', 'spades', 9);
		new card('10', 'spades', 10);
		new card('jack', 'spades', 11);
		new card('queen', 'spades', 12);
		new card('king', 'spades', 13);
		new card('ace', 'spades', 14);    //will have to implement function where this value is either 14 or 1
	]
}