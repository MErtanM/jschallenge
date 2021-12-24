//SORU 1
  // 1. Given an array of numbers, create a function which returns the same array but with each element’s index in the array added to itself. This means you add 0 to the number at index 0, 
  //add 1 to the number at index 1, etc...


 /* let a= [1, 2, 3]
[1+ 0, 3  + 1, 5 +2]

let b = [3, 8, 15]

[3,9,17]*/
/*
function addIndexes(array){
    let arrayTwo = [];
for(let i=0; i<array.length; i++){
 arrayTwo.push(array[i]+i )  
}
//console.log(arrayTwo)
return arrayTwo;
}

let argumentArray = [-25, -14, 5,  12]
//console.log(addIndexes(argumentArray))
let returnedValue = addIndexes(argumentArray)
//addIndexes(argumentArray)
console.log(returnedValue);
*/
// we need an array consisting of multiple element
//we need to find a way to iterate
//we need to find the indexes of the elements
//we need to add the indexes to that elements*/

// SORU 2----- Create a function that takes two arguments. 
//Both arguments are integers, 
//a and b. Return true if one of them is 10 or if their sum is 10.

//there will be two arguments
// if at least one of them is 10 or sum of them is 10, the funtion will return true

//cozum
/*
function isTrueOrFalse(number1, number2){

    return(number1 == 10 || number2 == 10 || (number1+number2 ==10))
}
console.log(isTrueOrFalse(2,8))
console.log(isTrueOrFalse(9,8))
console.log(isTrueOrFalse(15,5))

*/



/*
function isTrueOrFalse(number1,number2){

    if(number1 == 10 || number2 == 10 || (number1 + number2) == 10){
        return true;
    }
else {
    return false
}
}
console.log(isTrueOrFalse(14,6))
*/



// SORU 3
//     A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward
//     Write a function to check if the sentence is palindrome 

function isPalindrome(str){

    // var eliminateReg = /[\W_]/g;
    // let lowerCaseStr = str.toLowerCase().replace(eliminateReg , '')
    // let reversedStr = lowerCaseStr.split('').reverse().join('')
    // return(lowerCaseStr === reversedStr)
  
  
    var reg = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase().replace(reg , '')
    let strLength = lowerCaseStr.length;
  
    for(let i = 0; i < strLength / 2; i++) {
      if(lowerCaseStr[i] !== lowerCaseStr[strLength - 1 - i]) {
        return false;
      }
      return true;
    }
  
  
  }