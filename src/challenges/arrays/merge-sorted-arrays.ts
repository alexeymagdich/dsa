function solution(arr1: number[], arr2: number[]) {
  console.log(arr1);
  console.log(arr2);

  // O(log(n) * n)
  const merged = [...arr1, ...arr2].sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  });

  let currentIndexOfArr1 = 0;
  let currentIndexOfArr2 = 0;

  let firstItemInArr1 = arr1[currentIndexOfArr1];
  let firstItemInArr2 = arr2[currentIndexOfArr2];

  // O(n + m)
  const merged2: number[] = [];
  while (firstItemInArr1 || firstItemInArr2) {
    if (!firstItemInArr2 || firstItemInArr1 < firstItemInArr2) {
      merged2.push(firstItemInArr1);
      currentIndexOfArr1++;
      firstItemInArr1 = arr1[currentIndexOfArr1];

      continue;
    }

    if (firstItemInArr1 === undefined || firstItemInArr1 > firstItemInArr2) {
      merged2.push(firstItemInArr2);
      currentIndexOfArr2++;
      firstItemInArr2 = arr2[currentIndexOfArr2];

      continue;
    }

    if (firstItemInArr1 === firstItemInArr2) {
      merged2.push(firstItemInArr1, firstItemInArr2);

      currentIndexOfArr1++;
      currentIndexOfArr2++;

      firstItemInArr1 = arr1[currentIndexOfArr1];
      firstItemInArr2 = arr2[currentIndexOfArr2];
    }
  }

  return merged2;
}

export function mergeSortedArrays() {
  const result = solution([0, 3, 4, 31], [-1, 4, 6, 30, 40, 56]);

  console.log(result);
}
