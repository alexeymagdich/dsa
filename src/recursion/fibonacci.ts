// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(n)
function fibonacciIterative(index) {
  if (index < 0) {
    throw new Error('Invalid error');
  }

  if (index < 2) {
    return index;
  }

  const fibonacciNumbers = [0, 1];
  for (let i = 2; i <= index; i++) {
    const currentFibonacciNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    fibonacciNumbers.push(currentFibonacciNumber);
  }

  return fibonacciNumbers[index];
}

// O(2^n)
function fibonacciRecursive(index) {
  if (index < 2) {
    return index;
  }

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

export function fibonacci() {
  const f1 = fibonacciIterative(6);
  const f2 = fibonacciRecursive(40);

  console.log({
    f1,
    f2,
  });
}
