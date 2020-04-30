/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

04/29/2020 To Do:
-Test cases
*/

function checkCashRegister(price, cash, cid) {
  let len = cid.length,
    change = cash - price;
  //units = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]; //Note reversed  order from cid
  //units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  //let newcid = [...cid.reverse()]; //Keeps track of remaining cash in drawer after transaction

  //Find largest denomination of cash due back to customer
  //Determine denomination using "units" arr then map to index in "cid" arr
  //let ind = (units.length - 1) - units.findIndex( (x,i,arr) => change >= x && change < arr[i+1] ); 
  //let ind = units.findIndex( (x,i,arr) => change >= x && change < arr[i+1] ); 
  //let ind = units.findIndex( x => x > change );
  //console.log(ind);

  //Reverse search drawer to find largest denomination you can give change with
  //A loop here is more efficient that using .reverse().findIndex()
  let ind;
  for (let j = cid.length - 1; j >= 0; j--) {
    if (change >= cid[j][1]) {
      ind = j;
      break;
    }
  }

  //Determine change owed to customer and total amount of cash in drawer
  //let change = cash - price,
  let total_cid = cid.reduce((sum, x, j) => (j <= ind) ? sum + x[1] : sum, 0); //Exclude bills/coins that are too big and can't be broken


  //Check if there is enough cash in the drawer to give change
  if (total_cid < change) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }

  //If cash in drawer is equal to change, stop and return cid with a status of "Closed"
  if (total_cid == change) {
    return {
      status: "CLOSED",
      change: cid
    };
  }

  //Otherwise status is "Open." (cash in drawer is gt change)
  //Remove change due and update cid
  let rem, den
  changeArr = [], //Customer's change
    newcid = [...cid]; //Money left in drawer after transaction. Do we actually need this? No because we have already determined that 
  let units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  //Remove cash from drawer until there is no more change due to customer
  while (change >= 0.01) { //smallest denomination = 0.01 = "PENNY"
    //change = change.toPrecision(2);
    //den = cid[ind][1]; //Amount of money in drawer at current denomination

    //If cid[ind] == 0 there are no bills/coins of the current denomination then skip to then break and decrement ind
    if (cid[ind][1] == 0) {
      ind--;
      continue;
    }
    //If cid[ind] <= change then this denomination will be cleared out. Give the customer everything in cid[ind]. There may still be cash owed so keep iterating.
    else if (cid[ind][1] <= change) {
      changeArr.push(cid[ind]);
      change -= cid[ind][1]; //Check if there is still changed owed
    }
    //If cid[ind] > change then return the bills owed. There may still be remaining cash owed which can only be returned with smaller denominations so keep iterating. ex) cid = $20x3; change = $41.50; return $20x2 + $1.50
    else {  //cid[ind] > change
      rem = change.toFixed(2) % units[ind]; //Remainder still owed. Round here to avoid precision errors with cents.
      let withdrawn = change - rem; //Amount withdrawn from drawer
      withdrawn = (withdrawn < 1) ? withdrawn.toFixed(2) : Math.round(withdrawn); //Formatting
      if (withdrawn >= 0.01) { 
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


// console.log(checkCashRegister(20, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 15],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 200]
// ]));

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
  ]));

// console.log(checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]));

// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));

// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]));