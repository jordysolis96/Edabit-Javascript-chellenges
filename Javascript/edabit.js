console.log("Welcome to the edabit JavaScript exercises!")
// Create a function that takes two numbers as arguments and return their sum
function addition(a, b){
    return a + b;
}
// Create a function that takes the age and return the age in days.
function calcAge(age){
    return age * 365;
}
// Write a function that converts hours into seconds
function howManySeconds(hours) {
    return hours * 3600;
}

//write a function that converts minute into seconds
function Connvert(Minutes) {
    return minutes * 60;
}

//Create a function that takes an array containing only numbers and return the first element
function getFirstValue(arry){
   var randomArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return randomArr[0];
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false
function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return true;
    } else {
        return false;
    }
}

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(x, y) {
    return x % y;
}

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

//Create a function that takes voltage and current and returns the calculated power.
function circuitPower(voltage, current) {
    return voltage * current;
}

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increment(num) {
    return ++num;
}

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers){
    return twoPointers * 2 + threePointers * 3;
}

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
    if((a + b) < 100){
        return true;
    }
}

//Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
    return "something " + a;
}

//This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:
function hello() {
    return "hello edabit.com"
}

//Make a function using the && operator.
function and(a, b) {
    if (a && b) {
        return true;
    } else{
        return false;
    }
}

//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return (base * height)/2;
}

//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function animals(chickens, cows, pigs) {
    return ((chickens * 2) * (cows * 4) * (pigs * 2));
}

//Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName, lastName) {
    return lastName + ", " + firstName;
}

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function cubes(a) {
    return a * a * a;
}

//Create a function that returns True if a string is empty and False otherwise
function isEmpty(s) {
    if(s === ""){
        return true;
    } else {
        return false;
    }
}

//Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
function returnNegative(n) {
    if(n){
        return -n;
    }
}

//Given a total due and a list representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
function changeEnough(change, amountDue) {
    let sum = change[0]*0.25 + change[1]*0.1 + change[2]*0.05 + change[3]*0.01;
    return sum >= amountDue;
}

//Create a function that takes length and width and finds the perimeter of a rectangle.
function findPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

//Write a function that returns the number of users in a chatroom based on the following rules:
//
// 1. If there is no one, return "no one online".
// 2. If there is 1 person, return "user1 online".
// 3. If there are 2 people, return "user1 and user2 online".
// 4. If there are n>2 people, return the first two names and add "and n-2 more online"

function chatroomStatus(users) {
    if ([]){
        return "no one online";
    } else if ([""]) {
        return "user1 online"
    } else if (["", ""]){
        return "user1 and user2 online"
    } else if ([]){
        return "error";
    }
}

//Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
//smile = :D
//grin :)
//sad :(
//mad :P

function emotify(str) {
    return str.replace('smile',":D").replace('grin',':)').replace('sad',':(').replace('mad',':P');
}

//Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
function getVoteCount(votes) {
    let x=votes.downvotes;
    let y=votes.upvotes;
    return y-x;
}

//Create a function that takes a list of numbers and returns the second largest number.
function secondLargest(arr) {
    return arr.sort((a,b) => +a - +b )[arr.length-2]
}

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if(num <= 0){
        return true
    } else{
        return false
    }
}

//Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// function squaed(b) {
//     return a * a
// }
function squared(b) {
    return b * b;
}

//Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
    if(a + b === 10){
        return true;
    } else {
        return false
    }
}

//Create a function that returns an array of strings sorted by length in ascending order.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

//Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).
function vowelLinks(str) {
    return /[aeiou] [aeiou]/.test(str)
}

//Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
function getHashTags(str) {
    return str.split(' ').sort((a, b) => b.length - a.length).slice(0, 3).map(c => '#' + c.replace(/\W/, '').toLowerCase());
}