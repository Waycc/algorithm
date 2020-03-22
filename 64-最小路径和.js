let minPathSum = function (grid) {
  let dp, m, n, leftValue, topValue;
  m = grid.length;
  n = grid[0].length;
  dp = [...new Array(m)].map(() => [...new Array(n)].map(() => 0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
        continue;
      }
      if (i === 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
        continue;
      }
      if (j === 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
        continue;
      }
      leftValue = dp[i][j - 1] + grid[i][j];
      topValue = dp[i - 1][j] + grid[i][j];
      dp[i][j] = leftValue;
      if (leftValue > topValue) {
        dp[i][j] = topValue;
      }
    }
  }
  console.log(dp)
  return dp[m - 1][n - 1]
};

console.log(minPathSum([
  [1, 3, 1],
]));
