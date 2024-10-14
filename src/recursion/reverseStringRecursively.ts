function reverseString(s: string) {
  if (s.length <= 1) {
    return s;
  }

  const sWithoutFirstSymbol = s.substring(1, s.length);
  return reverseString(sWithoutFirstSymbol) + s[0];
}

export function reverseStringRecursively() {
  const result = reverseString('hello');

  console.log(result);
}
