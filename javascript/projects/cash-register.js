function checkCashRegister(price, cash, cid) {
    
    //Determine change and total amount of cash in drawer
    let change = cash-price;

    //If cash in drawer is less than change, stop and return "Insufficiet Funds"
    //If cash in drawer is equal to change, stop and return cid with a status of "Closed"
    //Otherwise status is "Open." Continue to calculate change.

    //Determine # of bills and coins in drawer

    //Determine which bill/coin is closest to "cash."

    //Choose the lower range. Divide "cash" by the lower range bill/coin to determine
    //how many to remove from the drawer.

    //Find the remainder of cash % lower range to get remaining change owed. Continue
    //until remainder is 0.

    //Determine status of drawer
    //Rewrite change in terms of dollars

    //Return drawer status and change
         
  return {
    status: "",
    change: []
  };
}

checkCashRegister(19.5, 
20, 
[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
