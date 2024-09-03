function solution(nums: number[]) {
  let currentSum = nums[0];
  let bestSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    bestSum = Math.max(currentSum, bestSum);
  }

  return bestSum;
}

export function maximumSubArray() {
  const result = solution([5, 4, -1, 7, 8]);

  console.log(result);
}
