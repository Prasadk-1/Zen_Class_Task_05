// IIFE Function
//Q.a.Print odd numbers in an array

      let arr = [1,2,3,4,5,6,7,8,9,10];

      (function(){
           let oddNumbers = arr.filter(number => number%2 !== 0)
           console.log(oddNumbers);
       })();

//***********************************************************************//

//Q.b.Convert all the strings to title caps in a string array

let arr = ["ENgineer", "prasad" , "kasar","react" , "jAvascript"];

(function() {
            let lowerArr = arr.map(name => name.toLowerCase());
         for(var i = 0 ; i < lowerArr.length ; i++){
            let newArr = lowerArr[i].charAt(0).toUpperCase()+ lowerArr[i].slice(1);
          console.log(newArr);
}
 
})();

//***********************************************************************//


//Q.c.Sum of all numbers in an array

let array = [1,2,3,4,5,6,7,8,9,10];

 (function () {
	let total = 0;
	for (let i in array) {
      total += arr[i];
    }
  console.log(total);
})();

//***********************************************************************//


//Q.e.Return all the palindromes in an array

const random = ['nitin', 12321, 'axa','good'];
const newArr = [];

(function () {
    
    for(let i=0; i < random.length; i++) {
        let reverse = String(random[i]).split('').reverse().join('');
         if (reverse == random[i]){
            newArr.push(random[i]);    
        }       
    }
    console.log(newArr);
})();
//***********************************************************************//


//Q.g.Remove duplicates from an array


const arr1 = [1,2,3,3,'a',1,'a','b'];


(function() {
           let newArr = [...new Set(arr1)];
           console.log(newArr);
})(arr1);

//***********************************************************************//


//Q.h.Rotate an array by k times

    let array = [1,2,3,4,5,6,7,8,9,10];

const rotate=(function() {
    return {
        rotate1: function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop()) 
        
    }
        console.log(nums);
    }
    
    }
    
})();


rotate.rotate1(array,2); 
//***********************************************************************//
//***********************************************************************//

//Anonymous Functions
//Q.a.Print odd numbers in an array

let array = [1,2,3,4,5,6,7,8,9,10];

 let getOddNumbers = function(arr){
     let oddNumbers = arr.filter(number => number%2 !== 0)
     console.log(oddNumbers);
 }
 
 getOddNumbers(array);

//***********************************************************************//

//Q.b.Convert all the strings to title caps in a string array

let array = ["ENgineer", "prasad" , "kasar", "react" , "jAvascript"];

let titleCase = function(arr) {
            let lowerArr = arr.map(name => name.toLowerCase());
         for(var i = 0 ; i < lowerArr.length ; i++){
            let newArr = lowerArr[i].charAt(0).toUpperCase()+ lowerArr[i].slice(1);
          console.log(newArr);
}
}

titleCase(array);

//***********************************************************************//

//Q.c.Sum of all numbers in an array

let array = [1,2,3,4,5];
let addArrayNums=function (arr) {
	let total = 0;
	for (let i=0;i<arr.length;i++) {
      total += arr[i];
    }
  console.log(total);
}

addArrayNums(array);

//***********************************************************************//

//Q.e.Return all the palindromes in an array

const random = ['nitin', 12321, 'axa','good'];
const newArr = [];

const palindrome = function (abc) {
    
    for(let i=0; i < abc.length; i++) {
        let rev = String(abc[i]).split('').reverse().join('');
         if (rev == abc[i]){
            newArr.push(abc[i]);  
            
        }
       
    }
    console.log(newArr);
}
palindrome(random);

//***********************************************************************//

//Q.g.Remove duplicates from an array
const arr1 = [1,2,3,3,'a',1,'a','b'];


const unique = function(duplicateArray) {
           let newArr = [...new Set(duplicateArray)];
           console.log(newArr);
};

unique(arr1);
//***********************************************************************//

//Q.h.Rotate array K times

var array = [1,2,3,4,5,6,7]

var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop()) 
    }
    console.log(nums);
};

rotate(array,1);
//***********************************************************************//
//***********************************************************************//

//Arrow Function


//Q.a.Print odd numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray = numArray.filter((number) => number % 2 !== 0); 
    
console.log(numArray);

//***********************************************************************//
//Q.b.Convert all the strings to title caps in a string array

let array = ["ENgineer", "prasad" , "kasar", "react" , "jAvascript"];

let titleCase = (arr) => {
            let lowerArr = arr.map(name => name.toLowerCase());
         for(var i = 0 ; i < lowerArr.length ; i++){
            let newArr = lowerArr[i].charAt(0).toUpperCase()+ lowerArr[i].slice(1);
          console.log(newArr);
}
 
}

titleCase(array);

//***********************************************************************//
//Q.c.Sum of all numbers in an array

const array = [1,2,3,10];
let addArrayNums= (arr) => {
	let total = 0;
	for (let i=0;i<arr.length;i++) {
      total += arr[i];
    }
  console.log(total);
}

addArrayNums(array);

//***********************************************************************//
//Q.d.Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//***********************************************************************//


//Q.e.Return all the palindromes in an array

const random = ['nitin', 12321, 'axa','good'];
const newArr = [];

const palindrome = (abc) => {
    
    for(let i=0; i < abc.length; i++) {
        let rev = String(abc[i]).split('').reverse().join('');
         if (rev == abc[i]){
            newArr.push(abc[i]);  
            
        }
       
    }
    console.log(newArr);
}
palindrome(random);
