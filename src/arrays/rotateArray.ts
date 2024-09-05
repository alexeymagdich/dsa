/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Do not return anything, modify nums in-place instead.
 *
 *
 * Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

  Example 2:

    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation:
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
 */

// O(n) M(n)
function solution(nums: number[], k: number) {
  // Normalization of `k` in case of its bigger then `nums` length
  while (k > nums.length) {
    k = k - nums.length;
  }

  const prefixArray: number[] = [];
  const postfixArray: number[] = [];

  for (let i = nums.length - k; i < nums.length; i++) {
    prefixArray.push(nums[i]);
  }

  for (let i = 0; i < nums.length - k; i++) {
    postfixArray.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      nums[i] = prefixArray[i];
    } else {
      nums[i] = postfixArray[i - k];
    }
  }

  return nums;
}

export function rotateArray() {
  const result = solution([4, 4, 4, 12, 12, 14], 3);

  console.log(result);
}
