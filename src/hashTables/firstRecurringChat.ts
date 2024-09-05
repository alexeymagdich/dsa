// [2, 5, 1, 2, 3, 4, 1, 2, 4] => 2
// [2, 1, 1, 2, 3, 5, 1, 2, 4] => 1
// [2, 3, 4, 5] => null

// O(n), M(n)
function solution(nums: number[]) {
  const seenNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (seenNums[currentNum]) {
      return currentNum;
    }

    seenNums[currentNum] = true;
  }

  return null;
}

function solution_2(nums: number[]) {
  let seenNestedNums = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (seenNestedNums[nums[j]]) {
        return nums[j];
      }

      seenNestedNums[nums[j]] = true;

      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }

    seenNestedNums = {};
  }

  return null;
}

export function firstRecurringChat() {
  const result = solution_2([2, 1, 5, 2, 3, 4, 1, 2, 4]);

  console.log(result);
}
