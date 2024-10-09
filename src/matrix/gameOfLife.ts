// https://leetcode.com/problems/game-of-life/?envType=study-plan-v2&envId=top-interview-150

/**
 * LIVE < 2 LN => DEAD
 * LIVE = 2|3 LN => LIVE
 * LIVE > 3 LN => DEAD
 * DEAD = 3 LN => LIVE
 */

// 0 -> 1, 0, 0
// 1 -> 0, 0, 0, 1, 0

function getNewState(currentState: number, neighbors: number[]) {
  const numberOfAlive = neighbors.filter((n) => n === 1).length;

  if (currentState === 0) {
    return numberOfAlive === 3 ? 1 : 0;
  }

  if (numberOfAlive < 2) {
    return 0;
  } else if (numberOfAlive === 2 || numberOfAlive === 3) {
    return 1;
  } else {
    return 0;
  }
}

// j = 0, i = 0, j = board[i].length - 1, i = board.length - 1
function getNeighbors(board: number[][], currentItem: number[]) {
  const [i, j] = currentItem;

  const neighbor1 = board[i - 1] ? board[i - 1][j - 1] ?? 0 : 0;
  const neighbor2 = board[i - 1] ? board[i - 1][j] ?? 0 : 0;
  const neighbor3 = board[i - 1] ? board[i - 1][j + 1] ?? 0 : 0;
  const neighbor4 = board[i][j - 1] ?? 0;
  const neighbor5 = board[i][j + 1] ?? 0;
  const neighbor6 = board[i + 1] ? board[i + 1][j - 1] ?? 0 : 0;
  const neighbor7 = board[i + 1] ? board[i + 1][j] ?? 0 : 0;
  const neighbor8 = board[i + 1] ? board[i + 1][j + 1] ?? 0 : 0;

  const neighbors = [
    neighbor1,
    neighbor2,
    neighbor3,
    neighbor4,
    neighbor5,
    neighbor6,
    neighbor7,
    neighbor8,
  ];

  return neighbors;
}

/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const newStates = new Map<string, number>();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const neighbors = getNeighbors(board, [i, j]);
      const newState = getNewState(board[i][j], neighbors);
      newStates.set(`${i}-${j}`, newState);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = newStates.get(`${i}-${j}`) || 0;
    }
  }
}

export function gameOfLifeImplementation() {
  const life = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];

  console.log('1:', life);
  gameOfLife(life);
  console.log('2:', life);
}
