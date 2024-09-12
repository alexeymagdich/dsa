// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

function solution(s: string) {
  const trimmed = new String(s).trim(); // O(n)
  const words = trimmed.split(/ +/); // O(n)
  words.reverse(); // O(n)
  const reversedString = words.join(' '); // O(n)

  return reversedString;
}

export function reverseWordsInAString() {
  const result = solution(' the sky is  blue ');

  console.log(result);
}
