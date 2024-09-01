// O(n)
function solution(str: string) {
  const strArray = str.split('');

  const reversedStr: string[] = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    const symbol = strArray[i];
    reversedStr.push(symbol);
  }

  return strArray.reverse().join('');
}

export function reverseString() {
  const result = solution('Hello world!');

  console.log(result);
}
