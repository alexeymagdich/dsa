function solution(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[smallestIndex]) {
        smallestIndex = j;
      }
    }

    const smallest = numbers[smallestIndex];
    numbers[smallestIndex] = numbers[i];
    numbers[i] = smallest;
  }

  return numbers;
}

export function selectionSort() {
  const result = solution([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

  console.log(result);
}
