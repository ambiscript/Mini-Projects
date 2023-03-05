const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let pi = String(Math.PI);
const MAX = 100;

readline.question("Input a number: ", number => {
    if (number > MAX) {
        return Error("Input number exceeds maximum!");
    }

    console.log(pi.substring(0, Number(number) + 2));
    readline.close();
});