/**
 * Given 2 arrays of symbols -> detect (true or false) whether
 * these array contain the common specified symbol
 */

// O(n + m)
function solution(array1: string[], array2: string[]) {
  const obj1 = array1.reduce((currentObj, symbol) => {
    currentObj[symbol] = symbol;

    return currentObj;
  }, {});

  const found = array2.some((symbol) => {
    const found = obj1[symbol];
    return found !== undefined;
  });

  return found;
}

export function run_sameSymbolInArraysChallenge() {
  const result = solution(['a', 'b', 'c'], ['a', 'h', 'x']);

  console.log(`===== Same symbol in arrays =====`);
  console.log(result);
}
