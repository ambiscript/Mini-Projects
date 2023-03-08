# Pig Latin

## Description
Pig Latin is a game of alterations played on the English language game. To create the pig latin form of a word the initial consonant sound is transposed to the end of the word and an 'ay' is affixed. Example: "banana" would yield 'ananabay'. Make a program that converts a word or a sentence to PIg Latin. For added difficulty, if users input only numbers notify them of a translation error.

## Approach
1. Obtain a user-generated string.
2. If the string contains no letters, return an error.
3. For each word of the string, move the word's first letter to the last position of the word and add "ay".
4. Return the newly-translated string.

## NOTE
Javascript implementation is currently (as of 8 March 2023) broken due to what appears to be an error in Node's internal readline library. The error is logged in [pigLatin.js](pigLatin.js). Neither updating to the current LTS (18.15.0) nor the latest release (19.7.0) seemed to resolve the issue. Will be revisited soon.

## Reference
Idea obtained from [Programming Ideas 2](https://play.google.com/store/apps/details?id=com.alansa.ideabag2)