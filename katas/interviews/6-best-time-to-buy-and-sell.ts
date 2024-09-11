export function maxProfit(prices: number[]): number {
  let min = Infinity
  let maxProfit = 0

  for (let index = 0; index < prices.length; index++) {
    const price = prices[index]

    if (price < min) min = price

    const profit = price - min
    if (profit > maxProfit) maxProfit = profit
  }

  return maxProfit
}

maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([7,6,4,3,1])
