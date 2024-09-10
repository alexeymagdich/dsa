// O(n) M(1)
function solution(nums: number[], val: number) {
  let k = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      continue;
    }

    const lastElementIndex = nums.length - 1;
    const lastElement = nums[lastElementIndex];
    const currentElement = nums[i];

    nums[i] = lastElement;
    nums[lastElementIndex] = currentElement;

    nums.pop();

    if (lastElement === currentElement) {
      i--;
    }

    k--;
  }

  return k;
}

export function removeElement() {
  const result = solution([0, 1, 2, 2, 3, 0, 4, 2], 2);

  console.log(result);
}
