/*
You will write a card counting function. It will receive a card parameter,
which can be a number or a string, and increment or decrement the global 
count variable according to the card's value (see table). The function will
then return a string with the current count and the string Bet if the count
is positive, or Hold if the count is zero or negative. The current count 
and the player's decision (Bet or Hold) should be separated by a single space.
*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case(2):
    case(3):
    case(4):
    case(5):
    case(6):
      count++;
      break;
    case(7):
    case(8):
    case(9):
      break; //count = 0
    case(10):
    case('J'):
    case('Q'):
    case('K'):
    case('A'):
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  }
  else {//count <= 0
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
//cc(2); cc(3); cc(4); cc(5); console.log(cc(6));

function CardsSequence(seq){
  var len = seq.length;
  for (var i=0; i < len; i++){
    if (i == len-1) {
      console.log(cc(seq[i]));
    }
    else {
      cc(seq[i]);
    }
  }
  count = 0; //reset count at end of sequence
}

CardsSequence([2,3,4,5,6]);
CardsSequence([7,8,9]);
CardsSequence([10,'J','Q','K','A']);
CardsSequence([3,7,'Q',8,'A']);
CardsSequence([2,'J',9,2,7]);
CardsSequence([2,2,10]);
CardsSequence([3,2,'A',10,'K']);
