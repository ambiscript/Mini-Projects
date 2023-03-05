/*  ## Approach
    1. Obtain a user-generated string.
    2. If the string contains no letters, return an error.
    3. For each word of the string, move the word's first letter to the last position of the word and add "ay".
    4. Return the newly-translated string.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

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