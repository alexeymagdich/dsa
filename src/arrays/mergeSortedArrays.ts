// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// O(m + n)
function solution(nums1: number[], m: number, nums2: number[], n: number) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (k >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else if (nums2[j] > nums1[i]) {
      nums1[k] = nums2[j];
      j--;
      k--;
    } else if (i < 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    } else if (j < 0) {
      nums1[k] = nums1[i];
      i--;
      k--;
    }
  }

  console.log(nums1);
}

export function mergeSortedArrays() {
  const result = solution([0], 0, [1], 1);

  console.log(result);
}
