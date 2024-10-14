function solution(numbers: number[]) {
  let bubbledUp = 0;

  while (bubbledUp < numbers.length) {
    for (let i = 0; i < numbers.length - bubbledUp; i++) {
      const curr = numbers[i];
      const next = numbers[i + 1];

      if (curr > next) {
        numbers[i + 1] = curr;
        numbers[i] = next;
      }
    }

    bubbledUp++;
  }

  return numbers;
}

export function bubbleSort() {
  const result = solution([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);

  console.log(result);
}
