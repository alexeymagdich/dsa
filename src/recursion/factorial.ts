// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number: number) {
  if (number < 0) {
    throw new Error('Invalid number');
  }

  if (number === 0) {
    return 1;
  }

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number: number) {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }

  return result;
}

export function factorial() {
  const f1 = findFactorialIterative(5);
  const f2 = findFactorialRecursive(5);

  console.log({
    f1,
    f2,
  });
}
