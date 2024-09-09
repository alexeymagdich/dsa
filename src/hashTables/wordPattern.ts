/**
 * Given a pattern and a string s, find if s follows the same pattern.
    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:
    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.

    Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
    Explanation:
    The bijection can be established as:
    'a' maps to "dog".
    'b' maps to "cat".

    Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

    Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false
 */

// O(k + n) M(n)
function solution(pattern: string, s: string) {
  const words = s.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }

  const map = new Map<string, string>();
  const alreadySavedWords = new Set<string>();
  for (let i = 0; i < pattern.length; i++) {
    const word = words[i];
    const symbol = pattern[i];

    if (map.has(symbol) && map.get(symbol) !== word) {
      return false;
    }

    if (alreadySavedWords.has(word) && !map.has(symbol)) {
      return false;
    }

    if (!map.has(symbol)) {
      map.set(symbol, word);
      alreadySavedWords.add(word);
    }
  }

  return true;
}

export function wordPattern() {
  const result = solution('abba', 'cat dog dog cat');

  console.log(result);
}
