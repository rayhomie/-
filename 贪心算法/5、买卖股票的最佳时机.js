/*
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/** 暴力(超时)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result = Math.max(prices[j] - prices[i], result);
    }
  }
  return result;
};

/** 贪心
 * 遍历一遍，取当前最小的值，算最大的利润
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]); // 取最左最小价格
    result = Math.max(result, prices[i] - min); // 直接取最大区间利润
  }
  return result;
};

console.log(maxProfit([2, 4, 1]));

// dp
var maxProfit = function(prices) {
  // judge the boundary conditions
  if(!prices || prices.length === 1) return 0
  let len = prices.length,
  dp = [0],
  minPrice = prices[0]
  
  for(let i = 1; i < len; i++){
    // find the minimum price
    minPrice = Math.min(minPrice, prices[i])
    // record the maximum profit of per day
    dp.push(Math.max(dp[i-1], prices[i]-minPrice))
  }
  return dp[len-1]
};


