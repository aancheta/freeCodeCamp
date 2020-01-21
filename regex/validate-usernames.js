/*
Regular Expressions: Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "jack";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
let result = userCheck.test(username);
console.log(result);


/*
Explanation:
1. ^[a-z] --> first character is a letter
2a. [a-z]+\d* --> (+) followed by some letters 1 or more times and then (*) followed by a digit 0 or more times
--OR--
2b. \d{2,} --> followed by a digit at least twice (e.g. Z94)
3. ()$ --> searches rest of end of line is ^[a-z] is true
*/


