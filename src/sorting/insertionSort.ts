const solution = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    let j = i + 1;

    while (numbers[j] < numbers[j - 1]) {
      const temp = numbers[j];
      numbers[j] = numbers[j - 1];
      numbers[j - 1] = temp;
      j--;
    }
  }

  return numbers;
};

export function insertionSort() {
  const result = solution([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

  console.log(result);
}
