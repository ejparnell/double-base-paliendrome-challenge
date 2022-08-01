/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/

//check if a number is palindrome in base 10
//split the base code .
// if it is convert it to base 2
// then check if it is a palindrome in base 2
// if it is palindrome in both add it to the sum


const doubleBasePalindromeSum = function (base10, base2, upperLimit) {
      const successfulValues = []

      function checkpalindrome(num) {
            
            let reverseNum = num.split('').reverse().join(''); 
            // if true, return TRUE || if not, return FALSE
            return reverseNum === num
      }


      for (let i = 0; i < upperLimit; i++){
            //for every number from 0-upperLimit we to test for palindrome for two 
            
            if (checkPalindrome(Math.abs(i).toString(base10)) &&
            checkPalindrome(Math.abs(i).toString(base2))) {
                  // console.log('it works')
                  successfulValues.push(i)
            } 
      }

      console.log('+++++', successfulValues)
      let result = successfulValues.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0
      );
            

      // declare an empty array for the successful values 
      //turn 585 into decimal string 
      // let decimalString = (math.abs(585).toString(10))
      // //turn 585 into binary (base 2) string 
      // let binaryString = (math.abs(585).toString(2))
      // //check for palindrome ( make a padindrome checking function)
      // //if it passes 10 & 2 palindrom return value and push into 
      // if (checkPalindrome(decimalString) && checkPalindrome(binaryString)){
      //       console.log('it works')
      //       successfulValues.push()
      // }
      
      
      // (successful values array)
      //for loop to check numbers between 0 and upper limit (1m)
      // find sum of the array and return value 



      return result
      
      
      
      
      
      
}


doubleBasePalindromeSum(base10, base2, upperLimit)




//       // DO NOT MODIFY
// module.exports = {
// 	doubleBasePalindromeSum,
// }

