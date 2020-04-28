/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

04/27/2020 To Do:
-If you dont have enough small change and break large bills then you must return "INSUFFICIENT_FUNDS"
*/

function checkCashRegister(price, cash, cid) {

  //Determine customer's change and total amount of cash in drawer
  let change = cash - price,
    total_cid = cid.reduce((sum, x) => sum += x[1], 0);

  //Check if there is enough cash in the drawer to give EXACT change
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

  //Otherwise status is "Open." Continue to calculate change.
  let ind, rem, cidElem, changeArr = [];
  let units = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]; //Note reversed  order from cid

  do {
    //Determine largest USD denomination "change" is divisble by. Get corresponding index in units arr.
    ind = units.findIndex(x => Math.trunc(change / x) != 0);
    rem = change % units[ind]; //remaining change owed
    cidElem = cid[cid.length - 1 - ind];

    //Validate funding
    if (cidElem[1] < change - rem) { 
      return {status: "INSUFFICIENT_FUNDS", change: []}; 
    }

    //push with name and cash back
    changeArr.push([cid[cid.length - 1 - ind][0], change - rem]);
    change = rem; //update change with remaining change owed
  }
  while (change >= 0.01);

  return {
    status: "OPEN",
    change: changeArr
  }
}
//   



//Update cid and status

//Find the remainder of change % lower range to get remaining change owed. Continue
//until remainder is 0.


//   if (change <= 0.01 && change > 0) { return {status: "OPEN", change: changeArr} }
//   else 

//   //Determine status of drawer
//   //Rewrite change in terms of dollars

//   //Return drawer status and change

// return {
//   status: "",
//   change: []
// };


// console.log(checkCashRegister(19.5,
//   20,
//   [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]));

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
]));

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