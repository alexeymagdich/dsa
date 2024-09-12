// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// O(n) M(1)
function solution(prices: number[]) {
  if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(currentPrice, minPrice);

    const currentProfit = Math.max(currentPrice - minPrice, profit);
    profit = Math.max(currentProfit, profit);
  }

  return profit;
}

export function bestTimeToBuyAndSellStock() {
  const result = solution([7, 1, 5, 3, 6, 4]);

  console.log(result);
}
