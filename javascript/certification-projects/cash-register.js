/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

*/

function checkCashRegister(price, cash, cid) {
  let change = cash - price;  //Change owed to customer
  const units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]; //USD denomination definitions

  //Reverse search drawer to find largest denomination you can give change with
  //A loop here is more efficient that using .reverse().findIndex() because it doesn't create memory for a new array
  // let ind = units.reverse().findIndex( unit => { if (change >= unit) { return true; } } );
  // ind = (units.length - 1) - ind; //Need to re-index here because of reverse search
  let ind;
  for (let j = cid.length - 1; j >= 0; j--) {
    if (change >= units[j]) {
      ind = j;
      break;
    }
  }

  //Determine total amount of cash in drawer
  //Exclude bills/coins that are too big and can't be broken
  const total_cid = cid.reduce((sum, x, j) => (j <= ind) ? sum + x[1] : sum, 0); 

  //"INSUFFICIENT_FUNDS" if there is not enough cash in the drawer for exact change
  if (total_cid < change) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  //"CLOSED" if cash in drawer is equal to change
  if (total_cid == change) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  //Otherwise status is "OPEN." (cash in drawer > change due)
  //Remove change due and update cid
  let rem,  //Remaining change owed
      drawer, //2D cid element ["name", number]
      changeArr = [];
  const minDen = 0.01;  //Smallest denomination is "PENNY"
  
  //Remove cash from drawer until there is no more change due to customer
  while (change >= minDen) {  
    drawer = cid[ind][1];

    // //If there are no bills/coins in this denomination's drawer then skip iteration and update ind
    // if (drawer == 0) {
    //   ind--;
    //   continue;
    // }
    //If drawer <= change then the drawer for this denomination will be cleared out. There may still be cash owed so keep iterating.
    if (drawer <= change) {
      changeArr.push(cid[ind]);
      change -= drawer; //Update change still owed, if any
    }
    //If (drawer > change) then return the bills owed. There may still be cash owed which can only be returned with smaller denominations so keep iterating. ex) cid = $20x3; change = $41.50; cid - change = $1.50 owed
    else {
      rem = change.toFixed(2) % units[ind]; //Remainder still owed. Round here to avoid precision errors with cents.
      let withdrawn = change - rem; //Amount withdrawn from drawer
      withdrawn = Number( (withdrawn < 1) ? withdrawn.toFixed(2) : Math.round(withdrawn) ); //Formatting

      if (withdrawn >= minDen) { 
        changeArr.push([cid[ind][0], withdrawn]) 
        change = rem; //Update change owed with remainder
      }; 
    }

    ind--;


  }

  return {
    status: "OPEN",
    change: changeArr
  };
}

//Tests
//-----

console.log(checkCashRegister(20, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 15],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 200]
]));  //{ status: 'INSUFFICIENT_FUNDS', change: [] }

console.log(checkCashRegister(19.5,
  20,
  [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));  //{ status: 'OPEN', change: [ [ 'QUARTER', '0.50' ] ] }

console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  //{ status: 'INSUFFICIENT_FUNDS', change: [] }

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  //{ status: 'INSUFFICIENT_FUNDS', change: [] }

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}