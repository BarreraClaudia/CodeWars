// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
    let numSum = 0;
    let strSum = 0;
  
    x.forEach(integer =>
      typeof integer === 'number'
        ? (numSum += integer)
        : (strSum += Number(integer)),
    );
  
    return numSum - strSum;
}