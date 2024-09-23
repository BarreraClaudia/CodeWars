/*
Scenario:
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task:
Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes:
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples:
rowWeights([13, 27, 49])  ==>  return [62, 27]
rowWeights([50, 60, 70, 80])  ==>  return [120, 140]
rowWeights([80])  ==>  return [80, 0]
*/

function rowWeights(array) {
    let teamOne = array
      .filter((num, idx) => idx % 2 === 0)
      .reduce((acc, cv) => acc + cv, 0);
    
    let teamTwo = array
      .filter((num, idx) => idx % 2 !== 0)
      .reduce((acc, cv) => acc + cv, 0);
    
    return [teamOne, teamTwo];
}