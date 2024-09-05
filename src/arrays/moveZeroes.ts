/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.

  Example 1:

  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Example 2:

  Input: nums = [0]
  Output: [0]
 */

function solution(nums: number[]) {
  let j: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp: number = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      j++;
    }
  }

  return nums;
}

export function moveZeroes() {
  const result = solution([0, 5, 0, 1, 0, 3, 12]);

  console.log(result);
}
