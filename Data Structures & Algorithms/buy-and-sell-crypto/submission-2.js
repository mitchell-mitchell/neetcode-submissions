class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let j = 1
        let i = 0
        
        while (j <= prices.length - 1) {
            if (prices[j] >= prices[i]) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
                j++
            } else {
                i = j
                j++
            }
        }

        return maxProfit
    }
}
