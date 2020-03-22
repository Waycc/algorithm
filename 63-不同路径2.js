let uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  if (m === 1) {
    return obstacleGrid[0].some(s => s === 1) ? 0 : 1
  }
  if (n === 1) {
    return obstacleGrid.some(s => s[0] === 1) ? 0: 1
  }
  if (obstacleGrid[m-1][n-1] === 1 || obstacleGrid[0][0] === 1) {
    return 0
  }
  let rowBlock = false;
  let colBlock = false;
  let dp = [...Array(m).keys()].map(() => [...Array(n).keys()].map(() => 0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j > 0) {
        if (obstacleGrid[0][j-1] === 1) {
          rowBlock = true;
        }
        if (!rowBlock) {
          dp[0][j] = 1
        }
        continue
      }

      if (j === 0 && i > 0) {
        if (obstacleGrid[i-1][0] === 1) {
          colBlock = true
        }
        if (!colBlock) {
          dp[i][0] = 1
        }
        continue
      }

      if (i===0 && j === 0) {
        if (obstacleGrid[0][1] !== 1 && obstacleGrid[1][0] !== 1) {
          dp[0][0] = 1
        }
        continue
      }
      if (obstacleGrid[i][j - 1] !== 1) {
        dp[i][j] = dp[i][j] + dp[i][j - 1];
      }
      if (obstacleGrid[i - 1][j] !== 1) {
        dp[i][j] = dp[i][j] + dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles(
  [[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
));
