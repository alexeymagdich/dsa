/**
 * This question was asked for me in August 2024 on Adaptiq interview.
 * Also, it's covered in video by Google: https://www.youtube.com/watch?v=XKu_SEDAykw
 */

// Input: nums = [7,-2,15,-13], target = 22
// Output: [0,2]
// Explanation: Because nums[0] + nums[2] == 22, we return [0, 2].
// function getTargetIndex(nums, target) {
// add your code here
// }

// O(n)
function solution_1(input: number[], sum: number) {
  const matchers = new Map();

  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    const numMatcher = matchers.get(num);

    if (numMatcher !== undefined) {
      return [numMatcher, i];
    }

    matchers.set(sum - num, i);
  }

  return null;
}

// Input is SORTED
// O(n)
function solution_2(input: number[], sum: number) {
  let lowest = 0;
  let highest = input.length - 1;

  while (lowest < highest) {
    const s = input[lowest] + input[highest];

    if (s === sum) {
      return [lowest, highest];
    }

    if (s > sum) {
      highest--;
    }

    if (s < sum) {
      lowest++;
    }
  }

  return null;
}

export function run() {
  const result1 = solution_1([1, 4, 9, 11, 13, 22], 22);
  const result2 = solution_2([1, 7, 8, 10, 12, 14], 8);

  console.log(`===== Adaptiq challenge =====`);
  console.log(`Results for ${solution_1.name}:`);
  console.log(result1);
  console.log(`Results for ${solution_2.name}:`);
  console.log(result2);
}
