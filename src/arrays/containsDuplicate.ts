/**
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */

// O(n), M(k)
function solution(nums: number[], k: number) {
  const foundNums = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (foundNums.has(num)) {
      return true;
    }

    foundNums.add(num);

    if (foundNums.size > k) {
      foundNums.delete(nums[i - k]);
    }
  }

  return false;
}

export function containsDuplicate() {
  const result = solution([1, 2, 3, 1, 2, 3], 2);

  console.log(result);
}
