/*  ## Approach
    1. Obtain a user-generated string.
    2. If the string contains no letters, return an error.
    3. For each word of the string, move the word's first letter to the last position of the word and add "ay".
    4. Return the newly-translated string.
*/

/*
    node:internal/readline/interface:286
    input.on('error', onerror);
            ^

    TypeError: input.on is not a function
        at Interface.InterfaceConstructor (node:internal/readline/interface:286:9)
        at new Interface (node:readline:112:3)
        at Object.createInterface (node:readline:212:10)
        at Object.<anonymous> (C:\Users\foxes\CSSE\Projects\Mini-Projects\PigLatin\pigLatin.js:8:43)
        at Module._compile (node:internal/modules/cjs/loader:1254:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
        at Module.load (node:internal/modules/cjs/loader:1117:32)
        at Module._load (node:internal/modules/cjs/loader:958:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
        at node:internal/main/run_main_module:23:47

    Node.js v18.15.0
    & Node.js v19.7.0
*/

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
    Punctuation needs to be processed out of the string. Potentially, also needs to be saved for re-entry.
*/

function process(inputString) {
    const characterDictionary = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let outputString = '';

    for (let index in inputString) {
        if (characterDictionary.includes(inputString[index])) {
            outputString += inputString[index];
        }
    }
}

function translate(inputString) {
    let noLetters = 0;
    let words = inputString.split(" ");

    for (let position in words) {
        if (!isNaN(Number(words[position]))) {
            noLetters++;
        } else {
            words[position] = words[position].substring(1, words[position].length) + words[position].substring(0, 1) + "ay";
        }
    }

    if (noLetters == words.length) {
        return Error("Translation Error: No words to translate!")
    }

    return words.join(" ");
}

readline.question("Input word or sentence to be translated:\n", inputString => {
    console.log(translate(inputString));
    readline.close();
});