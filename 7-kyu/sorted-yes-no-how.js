/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let sortedAscending = [...array].sort((a, b) => a - b).toString();
    let sortedDescending = [...array].sort((a, b) => a - b).reverse().toString();
    
    if (array == sortedAscending) {
      return 'yes, ascending';
    } else if (array == sortedDescending) {
      return 'yes, descending';
    } else {
      return 'no';
    }
}