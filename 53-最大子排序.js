// let maxSubArray = function (nums) {
//   let m, max, accumulate;
//   m = nums.length;
//   max = accumulate = 0;
//
//   for (let i = 0; i < m; i++) {
//     for (let j=i; j<m; j++) {
//       if (j === 0) max = nums[0]
//       accumulate += nums[j];
//       if (accumulate > max) {
//         max = accumulate
//       }
//     }
//     accumulate = 0
//   }
//   return max;
// };
//
// let b = [1, 2, 3]
// // console.log(a.length)
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

function createElement(type, props, children) {
  // props = assign({}, props);

  if (arguments.length>3) {
    children = [];
    for (let i=2; i<arguments.length; i++) {
      children.push(arguments[i]);
    }
  }
  console.log(children)
}

  createElement('a', {}, [{type: 'b'}], [{type: 'c'}])

