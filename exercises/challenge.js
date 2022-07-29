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
const doubleBasePalindromeSum = function (base10, base2, upperLimit) {
      let base10Sum = 0
      let base2Sum = 0
      let numBase10 = 0
      let numBase2 = 0
      for (let i = 0; i < upperLimit; i++) {
            numBase10 = i.toString()
            let base10Reverse = numBase10.split("").reverse().join("")
            numBase2 = i.toString(2)
            let base2Reverse = numBase2.split("").reverse().join("")
            // console.log(`num: ${i}, num to string: ${numBase10}, num reversed: ${base10Reverse}, num2: ${numBase2}, num2 rev: ${base2Reverse}`)

            if (base10Reverse == numBase10 && base2Reverse == numBase2) {
                  base10Sum += Number(numBase10)
                  base2Sum += Number(numBase2)
            }

      }
      return base10Sum //, base2Sum
}

console.log(doubleBasePalindromeSum(10, 2, 100))

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}