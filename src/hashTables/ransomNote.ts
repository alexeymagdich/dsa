/**
 *
  Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

  Example 1:

    Input: ransomNote = "a", magazine = "b"
    Output: false

  Example 2:

    Input: ransomNote = "aa", magazine = "ab"
    Output: false

  Example 3:

    Input: ransomNote = "aa", magazine = "aab"
    Output: true
 */

// O(n + k) M(k)
function canConstruct(ransomNote: string, magazine: string) {
  const magazineCounts = magazine.split('').reduce((hashTable, symbol) => {
    if (!hashTable[symbol]) {
      hashTable[symbol] = 1;
    } else {
      hashTable[symbol] += 1;
    }

    return hashTable;
  }, {});

  for (let i = 0; i < ransomNote.length; i++) {
    const currentSymbol = ransomNote[i];
    if (magazineCounts[currentSymbol]) {
      magazineCounts[currentSymbol] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

export function ransomNote() {
  const result = canConstruct('abcdee', 'ddwweeaaccb');

  console.log(result);
}
