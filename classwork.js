// JavaScript link to HTML test
// *Start of Code*
// console.log("Your Javascript file is linked correctly.")
// *End of Code*

// // # Javascript Conditionals Classwork
// // ### Problem 1 :
// // Create two variables
// // let anyWord = [WORD]
// // let theSameWord = [WORD]
// // create an if statement comparing the two variables. If they are the same print
// // THAT IS...
// // CORRECT!!!
// // Else print
// // THAT IS...
// // NOT CORRECT

// // *Start of Code*
// let anyWord = prompt ("Enter a word.");
// let theSameWord = prompt ("Enter another word.");
// if (anyWord == theSameWord) {
//     console.log ("THAT IS...CORRECT!!!");
// }

// else {
//     console.log ("THAT IS NOT CORRECT");
// }
// //*End of Code*

// // ### Problem 2 :
// // Ask the user to enter a number. If the number is positive print 
// // [NUMBER] is positive.
// // Oherwise print
// // [NUMBER] is negative.
// // *Start of Code*
// let userNumber = prompt ("Enter a number please.");
// parseInt (userNumber);
// if (userNumber >= 0) {
//     console.log(userNumber + " is positive.");
// }
// else {
//     console.log(userNumber + " is negative.")
// }
// //*End of Code*



// // ### Problem 3 :
// // Ask the user to enter a number. Ask the user to enter another number. If the sum of those two numbers is even alert the user 
// // The sum of [FIRST NUMBER] and [SECOND NUMBER] is even.
// // Oherwise alert the user
// // The sum of [FIRST NUMBER] and [SECOND NUMBER] is odd.

// // *Start of Code*
// let firstNumber = parseInt(prompt("enter a number."));
// let anotherNumber =parseInt(prompt ("enter another number."));
// let sum = firstNumber + anotherNumber;
// if ((sum % 2) == 0) {
//     alert("The sum of " + firstNumber + " and " + anotherNumber + " is even.");
// }
// else {
//     alert("The sum of " + firstNumber + " and " + anotherNumber + " is odd.");
// }
// //*End of Code*




// ### Problem 4 :
// Define a variable called `secretWord` with the string value "secret". Ask the user to enter a word. Ask the user to enter another word. If the words are the same OR one of the words matches `secretWord` print 
// You got in...but we don't know how
// If both words are the same but DO NOT match `secretWord` print---------
// You got in...but only because your words matched
// If only one of the words matched `secretWord` print
// You got in..but only because one of your words matched the secret word
// If both words are the same AND they match `secretWord` print
// You got in!
// Otherwise print
// Locked Out

// // *Start of Code*
// let secretWord = "secret";
// let userWord = prompt("Enter a word.");
// let userWord2 = prompt("Enter another word.");
// if (userWord == userWord2 || userWord == secretWord || userWord2 == secretWord) {
//     console.log("You got in..but we don't know how");
// }
// else if (userWord == userWord2 && userWord != secretWord && userWord2 != secretWord) {
//     console.log("You got in...but only because your words matched.");
// }
// // else if () {
// //     console.log("You got in..but only because one of your words matched the secret word");
// // }
// // else if () {
// //     console.log("You got in!");
// // }
// else {
//     console.log("Locked Out");
// }
// //*End of Code*


// ### Challenge:
// Ask the user to enter a day of the week. Print the corresponding Spanish word. If they do not input a day of the week print "That is not a day of the week in English."

// lunes. Monday.
// martes. Tuesday.
// miércoles. Wednesday.
// jueves. Thursday.
// viernes. Friday.
// sábado. Saturday.
// domingo. Sunday.
