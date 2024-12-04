// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
