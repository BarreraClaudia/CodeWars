// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    if (str === '') {
        return '';
    }

    let arr = str.split('-').join(', ').split('_').join(', ').split(', ');

    return arr
        .map((word, index) => {
            if (index === 0) {
                return word[0] + word.slice(1).toLowerCase();
            } else {
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            }
        })
        .join('');
}