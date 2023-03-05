/* APPROACH 
 * 
 * Starting with input number x, isolate each of its digits and replace the number with the sum of the squares of those digits.
 * If the new value of x is 1, return true.
 * Otherwise, save the value of x and repeat the process.
 * If x has a value it has had before, return false.
 */

function isHappyNumber(inputNumber) {
    let reached_values = [];

    while (inputNumber != 1) {
        reached_values.push(inputNumber);

        let digits = [];

        while ((inputNumber / 10) > 0) {
            digits.push(inputNumber % 10);
            inputNumber = Math.floor(inputNumber / 10);
        }

        inputNumber = 0;

        for (digit of digits) {
            inputNumber += digit**2;
        }

        for (value of reached_values) {
            if (value == inputNumber) {
                return false;
            }
        }
    }

    return true;
}

let happyNumbers = [];
let currentNumber = 0;

while (happyNumbers.length < 8) {
    if (isHappyNumber(currentNumber)) {
        happyNumbers.push(currentNumber);
    }

    currentNumber++;
}

console.log(happyNumbers);